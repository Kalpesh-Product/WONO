import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppStruct from "./structure/AppStruct";
import CompTest from "./pages/CompTest";
import Users from "./pages/Users";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import { UserProvider, UserContext } from "./contexts/UserContext";
import Register from "./pages/Register";
import Career from "./pages/Career";
import Dashboard from "./components/HomeDashboard/Dashboard";
import JobDetails from "./pages/JobDetails";
import RegsiteredUsers from "./pages/RegsiteredUsers";
import TermsAndCondtions from "./pages/TermsAndCondtions";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import TestingPage from "./pages/TestingPage";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Themes from "./pages/Themes";
import LeadsPage from "./pages/LeadsPage";
import Capital from "./pages/Capital";
import ProductPage from "./pages/ProductPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RequireAuth from "./components/RequireAuth";
import PrivateRoute from "./contexts/PrivateRoute";
import PublicRoute from "./contexts/PublicRoute";
import Faqs from "./pages/Faqs";
import WebsitePage from "./pages/WebsitePage";
import WebsiteLoginPage from "./pages/WebsiteLoginPage";
import ClientLandingPage from "./pages/Client-Pages/ClientLandingPage";

// New component for routes without header/footer
const NoLayout = ({ children }) => {
  return <>{children}</>;
};

function App({ useHideUnimportantErrors }) {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation(); // Get the current path

  const changeActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };
  useHideUnimportantErrors();

  // Define routes where the layout should not be rendered
  // const noHeaderFooterRoutes = ["/website"];
  const noHeaderFooterRoutes = ["/website", "/website-login", "/landing"];

  return (
    <div>
      <UserProvider>
        {/* <AppHeader activeTab={activeTab} changeActiveTab={changeActiveTab} /> */}

        {/* Conditionally render AppHeader and AppFooter based on the route */}
        {/* {!noHeaderFooterRoutes.includes(location.pathname) && (
          <AppHeader activeTab={activeTab} changeActiveTab={changeActiveTab} />
        )} */}

        {/* Conditionally render AppHeader and AppFooter based on the route */}
        {!noHeaderFooterRoutes.some((route) =>
          location.pathname.startsWith(route)
        ) && (
          <AppHeader activeTab={activeTab} changeActiveTab={changeActiveTab} />
        )}

        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <AppStruct />
              </PublicRoute>
            }
          />
          <Route
            path="/test"
            element={
              <PublicRoute>
                <CompTest />
              </PublicRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PublicRoute>
                <Users />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PublicRoute>
                <Homepage />
              </PublicRoute>
            }
          />
          <Route
            path="/saas"
            element={
              <PublicRoute>
                <Services />
              </PublicRoute>
            }
          />

          {/* PublicRoute for login-related routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/new-password"
            element={
              <PublicRoute>
                <NewPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <PublicRoute>
                <Contact />
              </PublicRoute>
            }
          />
          <Route
            path="/career"
            element={
              <PublicRoute>
                <Career />
              </PublicRoute>
            }
          />
          <Route
            path="/jobdetails/:id/:title"
            element={
              <PublicRoute>
                <JobDetails changeActiveTab={changeActiveTab} />
              </PublicRoute>
            }
          />
          <Route
            path="/regusers"
            element={
              <PublicRoute>
                <RegsiteredUsers />
              </PublicRoute>
            }
          />
          <Route
            path="/termsandconditions"
            element={
              <PublicRoute>
                <TermsAndCondtions />
              </PublicRoute>
            }
          />
          <Route
            path="/faqs"
            element={
              <PublicRoute>
                <Faqs />
              </PublicRoute>
            }
          />
          <Route
            path="/privacy"
            element={
              <PublicRoute>
                <PrivacyAndPolicy />
              </PublicRoute>
            }
          />
          <Route
            path="/testing"
            element={
              <PublicRoute>
                <TestingPage />
              </PublicRoute>
            }
          />
          <Route
            path="/themes"
            element={
              <PublicRoute>
                <Themes />
              </PublicRoute>
            }
          />
          <Route
            path="/capital"
            element={
              <PublicRoute>
                <Capital />
              </PublicRoute>
            }
          />
          <Route
            path="/leads"
            element={
              <PublicRoute>
                <LeadsPage />
              </PublicRoute>
            }
          />
          <Route
            path="/themes/products"
            element={
              <PublicRoute>
                <ProductPage />
              </PublicRoute>
            }
          />

          {/* <Route
            path="/landing"
            element={
              <PublicRoute>
                <ClientLandingPage />
              </PublicRoute>
            }
          /> */}

          {/* <Route
            path="/website"
            element={
              <PublicRoute>
                <WebsitePage />
              </PublicRoute>
            }
          /> */}

          {/* Route without header/footer */}
          <Route
            path="/website"
            element={
              <PublicRoute>
                <NoLayout>
                  <WebsitePage />
                </NoLayout>
              </PublicRoute>
            }
          />
          <Route
            path="/website-login"
            element={
              <PublicRoute>
                <NoLayout>
                  <WebsiteLoginPage />
                </NoLayout>
              </PublicRoute>
            }
          />
          <Route
            path="/landing"
            element={
              <PublicRoute>
                <NoLayout>
                  <ClientLandingPage />
                </NoLayout>
              </PublicRoute>
            }
          />

          {/* Private Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        {/* <AppFooter changeActiveTab={changeActiveTab} /> */}

        {/* Conditionally render AppFooter */}
        {/* {!noHeaderFooterRoutes.includes(location.pathname) && (
          <AppFooter changeActiveTab={changeActiveTab} />
        )} */}

        {/* Conditionally render AppFooter */}
        {!noHeaderFooterRoutes.some((route) =>
          location.pathname.startsWith(route)
        ) && <AppFooter changeActiveTab={changeActiveTab} />}
      </UserProvider>
    </div>
  );
}

export default App;
