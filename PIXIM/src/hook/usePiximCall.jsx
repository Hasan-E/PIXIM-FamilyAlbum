import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, profileSuccess } from "../features/PiximSlice";
import axios from "axios";

const usePiximCall = () => {
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);

  const getData = async (url) => {
    dispatch(fetchStart());
    if (!token) {
      console.log("token yok");
    }
    try {
      const { data } = await axios.get(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(profileSuccess());
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getData };
};

export default usePiximCall;
