import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../helper/url";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const accounts = localStorage.getItem("accounts")
  ? JSON.parse(localStorage.getItem("accounts"))
  : [];

const initialState = {
  token: localStorage.getItem("eeToken"),
  id: "",
  name: "",
  email: "",
  username: "",
  profile: "",
  loginStatus: null,
  loginError: null,
  regStatus: null,
  regError: null,
  G_LOG_STATUS: null,
  G_LOG_ERROR: null,
  userLoaded: false,
  Accounts: accounts,
  add_status: null,
  add_error: null,
};

export const AddUser = createAsyncThunk(
  "auth/add",
  async (data, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      });
      return token?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const LoginUser = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/login`, {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("eeToken", token?.data);
      return token?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const RegUser = createAsyncThunk(
  "auth/reg",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/new`, {
        name: user.name,
        email: user.email,
        username: user.username,
        password: user.password,
      });
      localStorage.setItem("eeToken", token?.data);
      return token?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

export const SignInWithGoogle = createAsyncThunk(
  "auth/google",
  async (email, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/mail-login`, {
        email: email,
      });
      localStorage.setItem("eeToken", token?.data);
      return token?.data;
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data, {
        position: "top-center",
        className: "toast__alert",
      });
      return rejectWithValue(error.response.data);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      if (state.token) {
        const user = jwtDecode(state.token);

        return {
          ...state,
          token: state.token,
          name: user.name,
          id: user.id,
          username: user.username,
          profile: user.profile,
          email: user.email,
          userLoaded: true,
        };
      }
    },

    logOut: (state) => {
      localStorage.removeItem("eeToken");
      toast.info("Logged out", {
        position: "top-center",
        className: "toast__alert",
      });

      return {
        ...state,
        token: "",
        name: "",
        id: "",
        username: "",
        profile: "",
        email: "",
        userLoaded: false,
      };
    },
    checkUser: (state, action) => {
      // Ensure state.Accounts is initialized as an array
      if (!Array.isArray(state.Accounts)) {
        state.Accounts = [];
      }

      const userExists = state.Accounts.find(
        (user) => user.id === action.payload.id
      );
      if (userExists) {
        return state; // No need to modify the state if the user already exists
      } else {
        // Update the Accounts array by appending the new user to a new copy of the array
        const updatedAccounts = [...state.Accounts, action.payload];
        // Store the updated Accounts array in localStorage
        localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
        // Return the updated state
        return { ...state, Accounts: updatedAccounts };
      }
    },
    switchAccount: (state, action) => {
      localStorage.setItem("eeToken", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        id: action.payload.id,
        username: action.payload.username,
        profile: action.payload.profile,
        email: action.payload.email,
        userLoaded: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state, action) => {
      return { ...state, loginStatus: "loading" };
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      const user = jwtDecode(action.payload);
      toast.success(`Welcome back ${user.username}`, {
        position: "top-center",
        className: "toast__alert",
      });
      return {
        ...state,
        token: action.payload,
        name: user.name,
        email: user.email,
        username: user.username,
        profile: user.profile,
        id: user.id,
        loginStatus: "success",
        userLoaded: true,
      };
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      //   toast.error(`Error: ${action.payload}`, { position: "top-center" });
      return { ...state, loginStatus: "rejected", loginError: action.payload };
    });
    builder.addCase(RegUser.pending, (state, action) => {
      return { ...state, regStatus: "loading" };
    });
    builder.addCase(RegUser.fulfilled, (state, action) => {
      const user = jwtDecode(action.payload);
      toast.success(`Welcome ${user.username}`, {
        position: "top-center",
        className: "toast__alert",
      });
      return {
        ...state,
        token: action.payload,
        name: user.name,
        email: user.email,
        username: user.username,
        id: user.id,
        regStatus: "success",
        userLoaded: true,
      };
    });
    builder.addCase(RegUser.rejected, (state, action) => {
      return { ...state, regStatus: "rejected", regError: action.payload };
    });
    builder.addCase(SignInWithGoogle.pending, (state, action) => {
      return { ...state, G_LOG_STATUS: "loading" };
    });
    builder.addCase(SignInWithGoogle.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          userLoaded: true,
          G_LOG_STATUS: "loading",
        };
      }
    });
    builder.addCase(SignInWithGoogle.rejected, (state, action) => {
      return { ...state, G_LOG_STATUS: "failed", G_LOG_ERROR: action.payload };
    });
    builder.addCase(AddUser.pending, (state, action) => {
      return { ...state, add_status: "Loading" };
    });
    builder.addCase(AddUser.fulfilled, (state, action) => {
      const user = jwtDecode(action.payload);
      toast.success(`@${user.username}has been added to device`, {
        position: "top-center",
        className: "toast__alert",
      });
      const processedUser = {
        token: action.payload,
        name: user.name,
        email: user.email,
        username: user.username,
        profile: user.profile,
        id: user.id,
        userLoaded: true,
      };
      const updatedAccounts = Array.isArray(state.Accounts)
        ? [...state.Accounts, processedUser]
        : [processedUser];
      localStorage.setItem("accounts", JSON.stringify(updatedAccounts));

      return { ...state, add_status: "Success", Accounts: updatedAccounts };
    });
    builder.addCase(AddUser.rejected, (state, action) => {
      return { ...state, add_status: "Failed", add_error: action.payload };
    });
  },
});

export default AuthSlice.reducer;
export const { loadUser, logOut, checkUser, switchAccount } = AuthSlice.actions;
