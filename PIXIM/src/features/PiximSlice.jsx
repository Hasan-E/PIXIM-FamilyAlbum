import { createSlice } from "@reduxjs/toolkit";

const piximSlice = createSlice({
  name: "pixim",
  initialState: {
    loading: false,
    error: false,
    profile: [],
    moments: [],
    selectedMoment: {},
    likes: {},
    comments: [],
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
      state.moments = payload?.data;
      state.loading = false;
      state.error = false;
    },
    momentSuccess: (state, { payload }) => {
      state.selectedMoment = payload?.data;
      state.loading = false;
      state.error = false;
    },
    likeSuccess: (state, { payload }) => {
      const { momentId, likeData } = payload;
      state.likes[String(momentId)] = likeData;
      state.loading = false;
      state.error = false;
    },
    commentSuccess: (state, { payload }) => {
      state.comments = payload.data;
      console.log(payload);
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  piximSuccess,
  profileSuccess,
  momentSuccess,
  likeSuccess,
  commentSuccess,
} = piximSlice.actions;
export default piximSlice.reducer;
