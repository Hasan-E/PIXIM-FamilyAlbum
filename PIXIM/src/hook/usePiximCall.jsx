import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  piximSuccess,
  profileSuccess,
  momentSuccess,
  likeSuccess,
} from "../features/PiximSlice";
import useAxios from "./useAxios";

const usePiximCall = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
  //!PROFİL BİLGİLERİ İÇİN

  const getProfile = async (userId) => {
    dispatch(fetchStart());
    if (!token) {
      console.log("token yok");
    }
    try {
      const { data } = await axiosWithToken.get(`users/${userId}`);
      dispatch(profileSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  //! TÜM VERİLER İÇİN
  const getData = async (url) => {
    dispatch(fetchStart());
    if (!token) {
      console.log("token yok");
    }
    try {
      const { data } = await axiosWithToken.get(`${url}`);
      dispatch(piximSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  //! TEK ANI İÇİN VERİ ÇEKME
  const getMoment = async (momentId) => {
    dispatch(fetchStart());
    if (!token) {
      console.log("token yok");
    }
    try {
      const { data } = await axiosWithToken.get(`blogs/${momentId}`);
      dispatch(momentSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //! LİKE-UNLİKE İŞLEMLEMLERİ
  const getLike = async (momentId) => {
    dispatch(fetchStart());
    if (!token) {
      console.log("token yok");
    }
    try {
      const { data } = await axiosWithToken.get(`blogs/${momentId}/getLike`);

      dispatch(
        likeSuccess({
          momentId,
          likeData: {
            didUserLike: data.didUserLike,
            count: data.countOfLikes,
          },
        })
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postLike = async (momentId) => {
    dispatch(fetchStart());
    if (!token) {
      console.log("token yok");
    }
    try {
      const { data } = await axiosWithToken.post(`blogs/${momentId}/postLike`);

      dispatch(
        likeSuccess({
          momentId,
          likeData: {
            didUserlike: data.didUserlike,
            count: data.countOfLikes,
          },
        })
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { getData, getProfile, getMoment, getLike, postLike };
};

export default usePiximCall;
