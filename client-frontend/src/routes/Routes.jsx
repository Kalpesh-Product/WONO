import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ClientLandingPage from "../pages/ClientLandingPage";
import AccessPage from "../pages/Access";

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
        path: "/access",
        element: <AccessPage />,
      },
    ],
  },
]);

export default router;
