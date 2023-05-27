import { Routes, Route, Outlet } from "react-router-dom";
import { Dashboard, Chat } from "../screens";
import { ROUTES } from "../Config";
import PrivateNavigator from "./PrivateNavigator";
import "../styles/dashboard.css";
export default function DashNavigator() {
  return (
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
      <Route path={ROUTES.DASHBOARD_CHARTS} element={<Dashboard />}></Route>
      <Route path={ROUTES.DASHBOARD_CHAT} element={<Chat />}></Route>
    </Routes>
  );
}
