import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  updateImageSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);

  //! REGİSTER İŞLEMİ

  const register = async (userInfo) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
      dispatch(registerSuccess(data));
      navigate("/pixim");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //! LOGOUT İŞLEMİ
  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}auth/logout`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //!LOGIN İŞLEMİ
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}auth/login`, userInfo);
      console.log(data);

      dispatch(loginSuccess(data));
      navigate("/pixim");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  //! PROFİL RESMİ GÜNCELLEME
  const updateImage = async (imageUrl, userId) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.patch(
        `${BASE_URL}users/${userId}`,
        { image: imageUrl },
        { headers: { Authorization: `Token ${token}` } }
      );

      dispatch(updateImageSuccess(data));
    } catch (error) {
      console.error("Profil resmi güncellenemedi", error);
    }
  };
  return { register, logout, login, updateImage };
};

export default useAuthCall;
