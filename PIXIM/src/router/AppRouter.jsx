import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NewMoment from "../pages/NewMoment";
import MyMoments from "../pages/MyMoments";
import Albums from "../pages/Albums";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/pixim" element={<PrivateRouter />}>
          <Route element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="new_moment" element={<NewMoment />} />
            <Route path="my_moments" element={<MyMoments />} />
            <Route path="albums" element={<Albums />} />
            <Route path="about" element={<About />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
