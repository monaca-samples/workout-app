import { useNavigate } from "react-router-dom";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { auth } from "js/firebase";
import { signOut } from "firebase/auth";

const Drawer = ({ drawerAnchor, toggleDrawer }) => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
    toggleDrawer(false);
  };
  const handleProfile = () => {
    navigate("/profile");
    toggleDrawer(false);
  };
  const handleRoutine = () => {
    navigate("/routine");
    toggleDrawer(false);
  };
  const handleSearchExercises = () => {
    navigate("/search-exercises");
    toggleDrawer(false);
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        toggleDrawer(false);
      })
      .catch((error) => {
        console.log(
          "Log out error\n",
          error.errorCode + " " + error.errorMessage,
        );
      });
  };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={drawerAnchor}
      onOpen={toggleDrawer(true)}
      onClose={toggleDrawer(false)}
    >
      <List
        sx={{
          pt: `env(safe-area-inset-top)`,
          pl: `env(safe-area-inset-left)`,
          pb: `env(safe-area-inset-bottom)`,
        }}
      >
        <ListItem sx={{ display: "block" }} key={"dashboard"} disablePadding>
          <ListItemButton onClick={handleDashboard}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ display: "block" }} key={"profile"} disablePadding>
          <ListItemButton onClick={handleProfile}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ display: "block" }} key={"routine"} disablePadding>
          <ListItemButton onClick={handleRoutine}>
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary={"Routine"} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ display: "block" }} key={"search"} disablePadding>
          <ListItemButton onClick={handleSearchExercises}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText sx={{ mr: 2 }} primary={"Search Exercises"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"logout"} disablePadding>
          <ListItemButton sx={{ color: "red" }} onClick={handleLogOut}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText primary={"Log Out!"} />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default Drawer;
