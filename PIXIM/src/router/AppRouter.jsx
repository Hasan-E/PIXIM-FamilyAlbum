import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
