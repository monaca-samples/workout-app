import Box from '@mui/material/Box';
import Bar from '../Bar';
import Drawer from '../Drawer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Profile = ({ drawerAnchor, toggleDrawer }) => {

  // TODO: get from firebase
  const user = {
    name: 'Juan',
    email: 'juan@asial.co.jp',
    weight: 59,
    height: 178,
  }

  const calculateBMI = () => {
    return (user.weight/((user.height/100)**2)).toFixed(2)
  }

  const bmiExplanation = (bmi) => {
    if(Number(bmi) < 18.5) {
      return {
        type: "Underweight",
        message: "You are currently underweight, and should try to gain weight,"
        + " in the form of both fat and muscle. There are different risks associated"
        + " with being underweight, such us osteoporosis, a weak inmune system, vitamin"
        + " deficiencies and generally an increased risk of mortality."
      }
    } else if(Number(bmi) < 25) {
      return {
        type: "Normal",
        message: "You have a normal and healthy weight.",
      }
    } else if(Number(bmi) < 30) {
      return {
        type: "Overweright",
        message: "Your current weight is over the normal weight. First consider "
        + "if you are a professional athlete, bodybuilder or someone who has more"
        + " muscle than the average person. If not, you should try to lose some weight."
        + " There are many risks associated with being overweight, such as high blood"
        + " pressure, heart disease, diabetes, etc., and an increased risk of mortality."
      }
    } else if(Number(bmi) < 35) {
      return {
        type: "Obese",
        message: "Your current weight is over the normal weight."
        + " There are many risks associated with being overweight, such as high blood"
        + " pressure, heart disease, diabetes, etc., and an increased risk of mortality."
        + " Since your weight is highly over the normal range, you should contact your"
        + " health provider to work on losing weight as soon as possible."
      }
    } else {
      return {
        type: "Extremely Obese",
        message: "Your current weight is over the normal weight."
        + " There are many risks associated with being overweight, such as high blood"
        + " pressure, heart disease, diabetes, etc., and an increased risk of mortality."
        + " Since your weight is highly over the normal range, you should contact your"
        + " health provider to work on losing weight as soon as possible."
      }
    }
  }

  return(
    <Box sx={{ display: 'flex' }}>
      <Bar title={'Profile'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
      
      <Container sx={{ pt: 10 }}>
        <Typography variant="h4">
          {user.name}
        </Typography>
        <Box>
          <Typography variant="h6">
            Personal information
          </Typography>
          <Typography variant="h6">
            Name: {user.name}
          </Typography>
          <Typography variant="h6">
            Email: {user.email}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            FItness information
          </Typography>
          <Typography variant="h6">
            Height: {user.height} cm
          </Typography>
          <Typography variant="h6">
            Weight: {user.weight} kg
          </Typography>
          EDIT! Button
        </Box>
        <Box>
          <Typography variant="h6">
            BMI
          </Typography>
          <Typography variant="h6">
            Your BMI is {calculateBMI()}
          </Typography> 
          <Typography variant="h6">
            {bmiExplanation(calculateBMI()).type}
          </Typography>
          <Typography variant="h6">
            {bmiExplanation(calculateBMI()).message}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Profile;
