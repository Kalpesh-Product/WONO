import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ClientLandingPage from "../pages/ClientLandingPage";
import AccessPage from "../pages/Access";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ClientLandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/access",
        element: <AccessPage />,
      },
      {
        path:"/profile",
        element:<Profile/>,
      },
      {
        path:"/dashboard",
        element:<Dashboard/>,
      },
      
    ],
  },
]);

export default router;
