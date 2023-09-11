import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../utils/cookie";
import userService from "../../api/services/userService";
import { signinCase, signupCase } from "./userBuilderCases";
import { handleErrNetwork } from "../../utils/err_network";

const initialState = {
  user: {
    logged: false,
  },
  status: "idle",
  error: false,
  message: null,
};

export const signup = createAsyncThunk(
  "user/signup",
  async (user, { rejectWithValue, dispatch }) => {
    // procedure is the procedure than this asyncthunk gonna do
    // handleError is what this asyncthunk will do if an error occured
    const procedure = async () => {
      const res = await userService.signup(user);

      await dispatch(
        signin({
          email: user.email,
          password: user.password,
        }),
      );

      return res.data;
    };

    const handleError = async (err) => {
      console.error("Request failed", err);
      return rejectWithValue({
        ...err.response.data,
        status: err.response.status,
      });
    };

    try {
      return await procedure();
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        return await handleErrNetwork(procedure, handleError);
      }
      return await handleError(err);
    }
  },
);

export const signin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    const procedure = async () => {
      const res = await userService.signin({ email, password });
      return res.data;
    };
    const handleError = async (err) => {
      console.error("Request failed", err);
      return rejectWithValue({
        ...err.response.data,
        status: err.response.status,
      });
    };

    try {
      return await procedure();
    } catch (err) {
      if (err.code === "ERR_NETWORK") {
        return await handleErrNetwork(procedure, handleError);
      }
      return await handleError(err);
    }
  },
);

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    getUserFromCookie(state) {
      state.user.accessToken = getCookie("access_token");
    },
    refreshUserData(state) {
      state.user = {
        logged: false,
      };
      state.status = "idle";
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // add the builder case using function
    signupCase(builder);
    signinCase(builder);
  },
});

export const selectAccessToken = (state) => state.user.user.accessToken;
export const selectRefreshToken = (state) => state.user.user.refreshToken;
export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;
export const selectUserErrorMessage = (state) => state.user.message;

export const { refreshUserData } = userSlice.actions;

export default userSlice.reducer;
