import { Route, Routes } from "react-router-dom";
import { Dashboard, Chat, DashboardLayout } from "../screens";
import { ROUTES } from "../Config";
import PrivateNavigator from "./PrivateNavigator";

export default function DashNavigator() {
  return (
    <>
      <DashboardLayout />
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path={ROUTES.DASHBOARD_CHARTS} element={<Dashboard />}></Route>
          <Route path={ROUTES.DASHBOARD_CHAT} element={<Chat />}></Route>
        </Route>
      </Routes>
    </>
  );
}
