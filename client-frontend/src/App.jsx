import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster richColors duration={3000} position="top-center" />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
