import { Routes, Route } from "react-router-dom";
import {
  APIs,
  Contact,
  Docs,
  FQA,
  Home,
  Login,
  NotFound,
  Register,
  About,
  ForgotPassword,
  UtilsLayout,
} from "../screens";
import { ROUTES } from "../Config";
import "../styles/style.css";
export default function AuthNavigator() {
  return (
    <>
      <Route path={ROUTES.WELCOME} element={<UtilsLayout />}>
        <Route index element={<Home />}></Route>
        <Route path={ROUTES.LOGIN} element={<Login />}></Route>
        <Route path={ROUTES.REGISTER} element={<Register />}></Route>
        <Route
          path={ROUTES.FORGET_PASSWORD}
          element={<ForgotPassword />}
        ></Route>
        <Route path={ROUTES.DOCS} element={<Docs />}></Route>
        <Route path={ROUTES.FQA} element={<FQA />}></Route>
        <Route path={ROUTES.APIs} element={<APIs />}></Route>
        <Route path={ROUTES.CONTACT} element={<Contact />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />}></Route>
        <Route path={ROUTES.UNAUTHORIZED} element={<NotFound />}></Route>
      </Route>
    </>
  );
}
