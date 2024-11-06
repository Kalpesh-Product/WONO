import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ClientLandingPage from "../pages/ClientLandingPage";
import AccessPage from "../pages/Access";
import Profile from "../pages/Profile";

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
      {
        path:"/profile",
        element:<Profile/>,
      },
      
    ],
  },
]);

export default router;
