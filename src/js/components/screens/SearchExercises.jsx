import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import Bar from '../Bar';
import Drawer from '../Drawer';

const SearchExercises = ({ drawerAnchor, toggleDrawer }) => {
  // TODO: populate with real data
  const cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ];

  return(
    <Box>
      <Bar title={'Search Exercises'} toggleDrawer={toggleDrawer}/>
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />
      
      <Box sx={{ pt: 8 }}>
        <Container maxWidth="md">
          <TextField
          fullWidth
            margin='normal'
            label='Search exercise'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 1 }}
          >
            Search
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://source.unsplash.com/random?exercise"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Exercise {card}
                  </Typography>
                  <Typography>
                    This is an exercise. The explanation is here. This is a long explanation without any meaning.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SearchExercises;
