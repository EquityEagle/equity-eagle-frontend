import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../helper/url";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("eeToken"),
  id: "",
  name: "",
  email: "",
  username: "",
  loginStatus: null,
  loginError: null,
  regStatus: null,
  regError: null,
  G_LOG_STATUS: null,
  G_LOG_ERROR: null,
  userLoaded: false,
};

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
          email: user.email,
          userLoaded: true,
        };
      }
    },

    logOut: (state) => {
      localStorage.removeItem("eeToken");
      toast.info("Logged out", { position: "top-center" });

      return {
        ...state,
        token: "",
        name: "",
        id: "",
        username: "",
        email: "",
        userLoaded: false,
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
  },
});

export default AuthSlice.reducer;
export const { loadUser, logOut } = AuthSlice.actions;
