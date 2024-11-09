import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ClientLandingPage from "../pages/ClientLandingPage";
import AccessPage from "../pages/Access";
import DragDropGrid from "../pages/DragDropGrid";
import ClientLoginPage from "../pages/ClientLoginPage";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // {
      //   index: true,
      //   element: <ClientLoginPage />,
      // },
      {
        path: "/landing",
        element: <ClientLandingPage />,
      },
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/access",
        element: <AccessPage />,
      },
      {
        path: "/landing",
        element: <ClientLandingPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/drag-test",
        element: <DragDropGrid />,
      },
    ],
  },
]);

export default router;
