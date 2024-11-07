const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const multer = require("multer");
const {
  registerUser,
  updateSection,
  checkEmail,
  forgotPassword,
  verifyOTP,
  resetPassword,
  login,
  logout,
  submitEnquiry,
  submitJobApplication,
  checkAuth,
  createJobApplication,
  syncEnquiriesToGoogleSheets
} = require("../controllers/userController");
const { upload } = require("../email/multerConfig");

// Route to trigger the sync
router.get('/sync-google-sheets', syncEnquiriesToGoogleSheets);

// Register user
router.post("/register", registerUser);

// Update user section
router.post("/register/section", updateSection);

// Check email
router.get("/check-email", checkEmail);

// Forgot password
router.post("/forgot-password", forgotPassword);

// Verify OTP
router.post("/verify-otp", verifyOTP);

// Reset password
router.post("/reset-password", resetPassword);

// User login
router.post("/login", login);

// User logout
router.get("/logout", logout);

// User logout
router.get("/logout", logout);

// Check-auth
// router.get('/check-auth',requireAuth, checkAuth);

// Submit enquiry
router.post("/enquiries", submitEnquiry);

// Route to handle job application
router.post("/jobapply", upload.single("resume"), createJobApplication);

module.exports = router;
