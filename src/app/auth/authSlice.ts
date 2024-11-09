import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "../../types/shared";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";
import { isString } from "../../types/guards";

interface IAuthState {
  loading: TLoading;
  error: string | null;
  name: string;
  isLoggedIn: boolean;
}
const initialState: IAuthState = {
  loading: "idle",
  error: null,
  name: "Ghaidaa",
  isLoggedIn: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    }
  },
  extraReducers: (builder) => {
    //Register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    })
    //Login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    })
  }
});
export const { logInOut } = authSlice.actions;
export { actAuthRegister, actAuthLogin };
export default authSlice.reducer;