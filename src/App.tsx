import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AuthLayout from "./Components/AuthLayout/AuthLayout";
import Login from "./Components/Login/Login";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import UserList from "./Components/UserList/UserList";
import Profile from "./Components/Profile/Profile";
import Notfound from "./Components/Notfound/Notfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserData from "./Components/UserData/UserData";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      children: [
        { index: true, element: <UserList /> },
        { path: "home", element: <Home /> },
        { path: "users", element: <UserList /> },
        { path: "userdata/:userId?", element: <UserData /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
