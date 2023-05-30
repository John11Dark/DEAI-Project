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
  Performance,
  Appointments,
  Tasks,
} from "./screens";
import { ROUTES } from "./Config";
import "./styles/style.css";
import Platforms from "./screens/dashboard/platforms";

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
      {/* <Route element={<DashboardLayout />}>
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
        <Route path={ROUTES.DASHBOARD_CHAT} element={<Chat />}></Route>
        <Route path={ROUTES.DASHBOARD_STATICS} element={<Chat />}></Route>
        <Route
          path={ROUTES.DASHBOARD_PERFORMANCE}
          element={<Performance />}
        ></Route>
        <Route
          path={ROUTES.DASHBOARD_PLATFORMS}
          element={<Platforms />}
        ></Route>
        <Route
          path={ROUTES.DASHBOARD_APPOINTMENTS}
          element={<Appointments />}
        ></Route>
        <Route path={ROUTES.DASHBOARD_TASKS} element={<Tasks />}></Route>
      </Route> */}
    </Routes>
  );
}
