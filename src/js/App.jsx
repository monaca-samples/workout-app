import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";
import Dashboard from "./components/screens/Dashboard";

const App =() => {
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
      element: <Dashboard />,
    }
  ]);

  return(
    <RouterProvider router={router}/>
  );
}

export default App;
