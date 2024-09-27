import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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


function App({useHideUnimportantErrors}) {
 
  const [activeTab, setActiveTab] = useState("Home");

  const changeActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };
  useHideUnimportantErrors();

  return (
    <div>
      <UserProvider>
        <AppHeader activeTab={activeTab} changeActiveTab={changeActiveTab} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicRoute>
              <AppStruct />
            </PublicRoute>
          } />
          <Route path="/test" element={
            <PublicRoute>
              <CompTest />
            </PublicRoute>
          } />
          <Route path="/users" element={
            <PublicRoute>
              <Users />
            </PublicRoute>
          } />
          <Route path="/home" element={
            <PublicRoute>
              <Homepage />
            </PublicRoute>
          } />
          <Route path="/services" element={
            <PublicRoute>
              <Services />
            </PublicRoute>
          } />

          {/* PublicRoute for login-related routes */}
          <Route path="/login" element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } />
          <Route path="/forgot-password" element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          } />
          <Route path="/new-password" element={
            <PublicRoute>
              <NewPassword />
            </PublicRoute>
          } />
          <Route path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />

          <Route path="/contact" element={
            <PublicRoute>
              <Contact />
            </PublicRoute>
          } />
          <Route path="/career" element={
            <PublicRoute>
              <Career />
            </PublicRoute>
          } />
          <Route path="/jobdetails/:id/:title" element={
            <PublicRoute>
              <JobDetails />
            </PublicRoute>
          } />
          <Route path="/regusers" element={
            <PublicRoute>
              <RegsiteredUsers />
            </PublicRoute>
          } />
          <Route path="/termsandconditions" element={
            <PublicRoute>
              <TermsAndCondtions />
            </PublicRoute>
          } />
          <Route path="/privacy" element={
            <PublicRoute>
              <PrivacyAndPolicy />
            </PublicRoute>
          } />
          <Route path="/testing" element={
            <PublicRoute>
              <TestingPage />
            </PublicRoute>
          } />
          <Route path="/themes" element={
            <PublicRoute>
              <Themes />
            </PublicRoute>
          } />
          <Route path="/capital" element={
            <PublicRoute>
              <Capital />
            </PublicRoute>
          } />
          <Route path="/leads" element={
            <PublicRoute>
              <LeadsPage />
            </PublicRoute>
          } />
          <Route path="/themes/products" element={
            <PublicRoute>
              <ProductPage />
            </PublicRoute>
          } />

          {/* Private Route */}
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
        <AppFooter changeActiveTab={changeActiveTab} />
      </UserProvider>
    </div>
  );
}

export default App;
