import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  homeSuccess,
  profileSuccess,
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
  //! HOME SAYFASI VERİ ÇEKME İŞLEMLERİ
  const getHome = async () => {
    dispatch(fetchStart());
    if (!token) {
      console.log("token yok");
    }
    try {
      const { data: momentsData } = await axiosWithToken.get(
        "blogs?sort[createdAt]=desc"
      );
      const moments = momentsData?.data || [];
      const likePromises = moments.map((moment) =>
        axiosWithToken.get(`blogs/${moment._id}/getLike`)
      );
      const likesResults = await Promise.all(likePromises);
      const likes = {};
      likesResults.forEach((res, index) => {
        const momentId = moments[index]._id;
        likes[momentId] = {
          didUserLike: res.data.didUserLike,
          count: res.data.countOfLikes,
        };
      });
      const { data: commentsData } = await axiosWithToken.get("comments");
      const comments = commentsData?.data || [];

      dispatch(homeSuccess({ moments, likes, comments }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //! LİKE-UNLİKE İŞLEMLEMLERİ
 
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
            didUserLike: data.didUserLike,
            count: data.countOfLikes,
          },
        })
      );
    } catch (error) {
      dispatch(fetchFail());
    }
  };


  return { getHome, getProfile, postLike, };
};

export default usePiximCall;
