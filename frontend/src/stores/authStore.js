import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    email: "",
    password: "",
  },

  user: {
    name: "",
    email: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
      const isValidEmail = emailRegex.test(value);
      const userNameError = isValidEmail ? "" : "Enter a valid email address";

      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
        userNameError, // Update the error state based on validation
      };
    });
  },

  login: async () => {
    const { loginForm } = authStore.getState();

    try {
      const res = await axios.post("/login", loginForm);
      set({
        loggedIn: true,
        loginForm: {
          email: "",
          password: "",
        },
      });
    } catch (error) {
      console.error("Login Failed:", error);
    }
  },

  getUserDetails: async () => {
    try {
      const res = await axios.get("/users");
      set({
        user: {
          name: res.data.name,
          email: res.data.email, // Ensure this is set correctly
        },
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth");
      set({ loggedIn: true });
    } catch (err) {
      set({ loggedIn: false });
    }
  },

  logout: async () => {
    try {
      await axios.get("/logout");
      set({ loggedIn: false });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  },
}));

export default authStore;
