import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  //! REGİSTER İŞLEMİ

  const register = async (userInfo) => {
    console.log(userInfo);
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(`${BASE_URL}users`, userInfo);
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { register };
};

export default useAuthCall;
