import Box from '@mui/material/Box';
import Bar from '../Bar';
import Drawer from '../Drawer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

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
      
      <Container sx={{ pt: 10 }} maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom>
            {user.name}
          </Typography>
        </Box>
        <Box
          sx={{ mb: 2 }}
        >
          <Typography variant="h6">
            Personal information
          </Typography>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" sx={{ m:1 }}>
              Name: {user.name}
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ m:1 }}>
              Email: {user.email}
            </Typography>
          </Paper>
          <Box display="flex" justifyContent="flex-end">
            <Button size="small" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ mb: 2 }}
        >
          <Typography variant="h6">
            Fitness information
          </Typography>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" sx={{ m:1 }}>
              Height: {user.height} cm
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ m:1 }}>
              Weight: {user.weight} kg
            </Typography>
          </Paper>
          <Box display="flex" justifyContent="flex-end">
            <Button size="small" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ mb: 2 }}
        >
          <Typography variant="h6">
            BMI
          </Typography>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h6" sx={{ m:1 }}>
              Your BMI is {calculateBMI()}
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ m:1 }}>
              {bmiExplanation(calculateBMI()).type}
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ m:1 }}>
              {bmiExplanation(calculateBMI()).message}
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default Profile;
