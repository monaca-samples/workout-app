import { useState } from 'react';
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
  const [searchText, setSearchText] = useState('');
  const [exercises, setExercises] = useState([]);

  const searchTextHandler = (e) => {
    setSearchText(e.target.value)
 };

  const onSearch = () => {
    if (searchText.trim().length === 0) {
      alert("Please input something");
      return
    }

    // TODO: return actual data from API
    setExercises([]);
    for (let i = 0; i < 10; i++) {
      setExercises((prevState) => ([...prevState, {name: `${searchText} ${i}`, image: "https://source.unsplash.com/random?exercise"}]))
    }
  }

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
            onChange={searchTextHandler}
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
            onClick={onSearch}
            sx={{ mt: 1 }}
          >
            Search
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          {exercises.map((exercise) => (
            <Grid item key={exercise.name} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image={exercise.image}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Exercise {exercise.name}
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
