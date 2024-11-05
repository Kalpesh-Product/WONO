import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
import ClientLoginPage from "../pages/ClientLoginPage";
import ClientLandingPage from "../pages/ClientLandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        // element: <Home />,
        // element: <ClientLoginPage />,
        element: <ClientLandingPage />,
      },
    ],
  },
]);

export default router;
