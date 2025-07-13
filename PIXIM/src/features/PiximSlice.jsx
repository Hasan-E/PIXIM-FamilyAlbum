import { createSlice } from "@reduxjs/toolkit";

const piximSlice = createSlice({
  name: "pixim",
  initialState: {
    loading:false,
    error:false,
    profile:[],
    members:[],
    moments:[],
    albums:[],


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
    profileSuccess: (state,{payload})=>{

    }
  },
});

export const {fetchStart,fetchFail,profileSuccess} = piximSlice.actions;
export default piximSlice.reducer;
