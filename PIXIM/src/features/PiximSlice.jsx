import { createSlice } from "@reduxjs/toolkit";

const piximSlice = createSlice({
  name: "pixim",
  initialState: {
    loading: false,
    error: false,
    profile: [],
    members: [],
    moments: [],
    albums: [],
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
    profileSuccess: (state, { payload }) => {
      state.profile = payload?.data;
      state.loading = false;
      state.error = false;
    },
    piximSuccess: (state, { payload }) => {
      state.moments = payload?.data
      state.loading = false;
      state.error = false;
      console.log("moments", payload.data);
    },
  },
});

export const { fetchStart, fetchFail, piximSuccess, profileSuccess } =
  piximSlice.actions;
export default piximSlice.reducer;
