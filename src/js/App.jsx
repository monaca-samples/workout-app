import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";
import Dashboard from "./components/screens/Dashboard";
import Profile from "./components/screens/Profile";
import Routine from "./components/screens/Routine";
import SearchExercises from "./components/screens/SearchExercises";

const App =() => {
  const [drawerAnchor, setDrawerAnchor] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerAnchor(open);
  };

  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard
                  drawerAnchor={drawerAnchor}
                  toggleDrawer={toggleDrawer}
                  changeTheme={changeTheme}
                />,
    },
    {
      path: "/profile",
      element: <Profile  
                drawerAnchor={drawerAnchor}
                toggleDrawer={toggleDrawer}
                changeTheme={changeTheme}
              />,
    },
    {
      path: "/routine",
      element: <Routine
                drawerAnchor={drawerAnchor}
                toggleDrawer={toggleDrawer}
                changeTheme={changeTheme}
              />,
    },
    {
      path: "/search-exercises",
      element: <SearchExercises
                  drawerAnchor={drawerAnchor}
                  toggleDrawer={toggleDrawer}
                  changeTheme={changeTheme}
                />,
    },
  ]);

  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
