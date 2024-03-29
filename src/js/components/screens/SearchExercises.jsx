import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";

import Bar from "js/components/Bar";
import Drawer from "js/components/Drawer";

import { searchApi } from "js/workoutApi";

const SearchExercises = ({ drawerAnchor, toggleDrawer, changeTheme }) => {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [exercises, setExercises] = useState([]);

  const searchTextHandler = (e) => {
    setSearchText(e.target.value);
  };

  const [searchingAll, setSearchingAll] = useState(false);

  // to manage pagination of results
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const onSearchMore = async () => {
    setStart((start) => start + 10);
    setEnd((end) => end + 10);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const onSearch = async () => {
    setExercises([]);
    let result;
    if (searchText.trim().length === 0) {
      setSearchingAll(true);
      try {
        result = await searchApi("all", searchText.toLowerCase(), null);
      } catch (error) {
        navigate("/error");
      }
    } else {
      try {
        result = await searchApi("name", searchText.toLowerCase(), null);
        setStart(0);
        setEnd(10);
        setSearchingAll(false);
      } catch (error) {
        navigate("/error");
      }
    }

    // filter results
    if (target.length != 0) {
      result = result.filter((exercise) => exercise.target === target);
    }
    if (equipment.length != 0) {
      result = result.filter((exercise) => exercise.equipment === equipment);
    }
    if (bodyPart.length != 0) {
      result = result.filter((exercise) => exercise.bodyPart === bodyPart);
    }

    if (result.length != 0) {
      setExercises(result);
    } else {
      alert("No exercises found");
    }

    // reset filters
    setTarget("");
    setBodyPart("");
    setEquipment("");
  };

  const [target, setTarget] = useState("");
  const handleChangeTarget = (event) => {
    setTarget(event.target.value);
  };
  const targets = [
    "abductors",
    "abs",
    "adductors",
    "biceps",
    "calves",
    "cardiovascular system",
    "delts",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "levator scapulae",
    "pectorals",
    "quads",
    "serratus anterior",
    "spine",
    "traps",
    "triceps",
    "upper back",
  ];

  const [bodyPart, setBodyPart] = useState("");
  const handleChangeBodyPart = (event) => {
    setBodyPart(event.target.value);
  };
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  const [equipment, setEquipment] = useState("");
  const handleChangeEquipment = (event) => {
    setEquipment(event.target.value);
  };
  const equipments = [
    "assisted",
    "band",
    "barbell",
    "body weight",
    "bosu ball",
    "cable",
    "dumbbell",
    "elliptical machine",
    "ez barbell",
    "hammer",
    "kettlebell",
    "leverage machine",
    "medicine ball",
    "olympic barbell",
    "resistance band",
    "roller",
    "rope",
    "skierg machine",
    "sled machine",
    "smith machine",
    "stability ball",
    "stationary bike",
    "stepmill machine",
    "tire",
    "trap bar",
    "upper body ergometer",
    "weighted",
    "wheel roller",
  ];

  const [showFilters, setShowFilters] = useState(false);
  const onClickFilter = () => {
    setShowFilters(!showFilters);
  };

  const [open, setOpen] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(null);
  const handleOpen = (currentExercise) => () => {
    setOpen(true);
    setCurrentExercise(currentExercise);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Bar
        title={"Search Exercises"}
        toggleDrawer={toggleDrawer}
        changeTheme={changeTheme}
      />
      <Drawer drawerAnchor={drawerAnchor} toggleDrawer={toggleDrawer} />

      {currentExercise ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            overflow: "scroll",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "75%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 2,
            }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                component="img"
                src={currentExercise.gifUrl}
                sx={{
                  maxHeight: { xs: 150, md: 150 },
                }}
              ></Box>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Instructions:
            </Typography>
            {currentExercise.instructions.map((instruction, index) => (
              <Typography key={index} id={index}>
                {index}: {instruction}
              </Typography>
            ))}
          </Box>
        </Modal>
      ) : (
        <></>
      )}

      <Box sx={{ pt: 8 }}>
        <Container maxWidth="md">
          <TextField
            fullWidth
            margin="normal"
            label="Search exercise"
            onChange={searchTextHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {showFilters ? (
            <>
              <Box>
                <Button
                  startIcon={<FilterListIcon />}
                  onClick={onClickFilter}
                  size="small"
                >
                  Hide filters
                </Button>
              </Box>
              <FormControl sx={{ mt: 1, mr: 1, minWidth: 120 }} size="small">
                <InputLabel id="target">Target</InputLabel>
                <Select
                  id="target"
                  value={target}
                  label="Target"
                  onChange={handleChangeTarget}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {targets.map((target, index) => (
                    <MenuItem key={index} value={target}>
                      {target}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ mt: 1, mr: 1, minWidth: 120 }} size="small">
                <InputLabel id="bodyPart">Body part</InputLabel>
                <Select
                  id="bodyPart"
                  value={bodyPart}
                  label="Body Part"
                  onChange={handleChangeBodyPart}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {bodyParts.map((bodyPart, index) => (
                    <MenuItem key={index} value={bodyPart}>
                      {bodyPart}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
                <InputLabel id="equipment">Equipment</InputLabel>
                <Select
                  id="equipment"
                  value={equipment}
                  label="Equipment"
                  onChange={handleChangeEquipment}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {equipments.map((equipment, index) => (
                    <MenuItem key={index} value={equipment}>
                      {equipment}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          ) : (
            <Button
              startIcon={<FilterListIcon />}
              onClick={onClickFilter}
              size="small"
            >
              Show filters
            </Button>
          )}
          <Button
            fullWidth
            variant="contained"
            onClick={onSearch}
            sx={{ mt: 2 }}
          >
            Search
          </Button>
        </Container>
      </Box>

      <Container sx={{ py: 4 }} maxWidth="md">
        <Grid container spacing={2}>
          {exercises.slice(start, end).map((exercise, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: "100%",
                  }}
                  image={exercise.gifUrl}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {exercise.name}
                  </Typography>
                  <Typography>{`Target muscle: ${exercise.target}`}</Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={handleOpen(exercise)} size="small">
                    View Instructions
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {searchingAll ? (
          <>
            <Button
              fullWidth
              variant="contained"
              onClick={onSearchMore}
              sx={{ mt: 2 }}
            >
              Search more!
            </Button>
          </>
        ) : (
          <></>
        )}
      </Container>
    </Box>
  );
};

export default SearchExercises;
