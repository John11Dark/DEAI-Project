import { AuthNavigator, DashboardNavigator } from "./Navigator";
import { Route, Routes } from "react-router-dom";
import {
  Chat,
  Dashboard,
  DashboardLayout,
  Docs,
  ForgotPassword,
  Home,
  Login,
  Register,
  UtilsLayout,
  FQA,
  APIs,
  Contact,
  About,
  NotFound,
} from "./screens";
import { ROUTES } from "./Config";
import "./styles/style.css";

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.WELCOME} element={<UtilsLayout />}>
        <Route index element={<Home />}></Route>
        <Route path={ROUTES.LOGIN} element={<Login />}></Route>
        <Route path={ROUTES.REGISTER} element={<Register />}></Route>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />}></Route>
        <Route path={ROUTES.UNAUTHORIZED} element={<NotFound />}></Route>
        <Route
          path={ROUTES.FORGET_PASSWORD}
          element={<ForgotPassword />}
        ></Route>
        <Route path={ROUTES.DOCS} element={<Docs />}></Route>
        <Route path={ROUTES.FQA} element={<FQA />}></Route>
        <Route path={ROUTES.APIs} element={<APIs />}></Route>
        <Route path={ROUTES.CONTACT} element={<Contact />}></Route>
        <Route path={ROUTES.ABOUT} element={<About />}></Route>
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
        <Route path={ROUTES.DASHBOARD_CHARTS} element={<Dashboard />}></Route>
        <Route path={ROUTES.DASHBOARD_CHAT} element={<Chat />}></Route>
      </Route>
    </Routes>
  );
}
