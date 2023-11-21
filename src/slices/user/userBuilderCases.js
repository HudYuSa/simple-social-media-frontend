import { setCookie } from "../../utils/cookie";
import { parseJwt } from "../../utils/jwt";
import { signin, signup } from "./userSlice";

export const signupCase = (builder) => {
  builder
    // SIGNUP
    .addCase(signup.pending, (state) => {
      state.status = "pending";
    })
    .addCase(signup.fulfilled, (state, action) => {
      state.status = "idle";
      state.error = false;
      state.user = { ...state.user, ...action.payload.data };
    })
    .addCase(signup.rejected, (state, action) => {
      state.status = "idle";
      // error message from backend
      state.error = action.payload.error;
      state.message = action.payload.message;
    });
};

export const signinCase = (builder) => {
  //SIGNIN
  builder
    .addCase(signin.pending, (state) => {
      state.status = "pending";
    })
    .addCase(signin.fulfilled, (state, action) => {
      state.status = "idle";
      state.error = false;
      state.user.accessToken = action.payload.data["access_token"];
      state.user.refreshToken = action.payload.data["refresh_token"];
      state.user.logged = true;
      // set the cookie
      setCookie("access_token", action.payload.data["access_token"], 30); // 30 minutes
      setCookie("refresh_token", action.payload.data["refresh_token"], 10.08); // a week

      // set user data from the token
      const user = parseJwt(state.user.accessToken);
      state.user = { ...state.user, ...user.sub };
    })
    .addCase(signin.rejected, (state, action) => {
      state.status = "idle";
      // error message from backend
      state.error = action.payload.error;
      state.message = action.payload.message;
    });
};
