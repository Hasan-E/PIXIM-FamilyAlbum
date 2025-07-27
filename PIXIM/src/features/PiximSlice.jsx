import { createSlice } from "@reduxjs/toolkit";

const piximSlice = createSlice({
  name: "pixim",
  initialState: {
    loading: false,
    error: false,
    profile: [],
    moments: [],
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
    homeSuccess: (state, { payload }) => {
      state.moments = payload?.moments;
      state.likes = payload.likes;
      state.comments = payload.comments;
      state.loading = false;
      state.error = false;
    },
    likeSuccess: (state, { payload }) => {
      const { momentId, likeData } = payload;
      state.likes[String(momentId)] = likeData;
      state.loading = false;
      state.error = false;
    },
    updateMoment: (state, { payload }) => {
      const updatedMoment = payload;
      state.moments = state.moments.map((moment) => {
        return moment._id === updatedMoment._id ? updatedMoment : moment;
      });
      state.loading = false;
      state.error = false;
    },
    addCommentSuccess: (state, { payload }) => {
      state.comments.push(payload);
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  homeSuccess,
  profileSuccess,
  likeSuccess,
  updateMoment,
  addCommentSuccess,
} = piximSlice.actions;
export default piximSlice.reducer;
