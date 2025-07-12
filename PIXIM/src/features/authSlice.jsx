import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
    image: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    registerSuccess: (state, { payload }) => {
      state.currentUser = payload.data.username;
      state.token = payload.token;
      state.image = payload.data.image;
      state.loading = false;
    },
    loginSuccess: (state, { payload }) => {
      state.currentUser = payload?.user?.username;
      state.token = payload?.token;
      state.image = payload?.user?.image;
      state.loading = false;
    },
    logoutSuccess: (state) => {
      (state.token = null), (state.loading = false), (state.currentUser = null);
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
  logoutSuccess,
  loginSuccess,
} = authSlice.actions;
export default authSlice.reducer;
