import { Routes, Route } from "react-router-dom";
import { RoutePath } from "../types/routes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Game from "../pages/Game";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.ADMIN} element={<Admin />} />
      <Route path={RoutePath.GAME + "/:id"} element={<Game />} />
    </Routes>
  );
};

export default Router;
