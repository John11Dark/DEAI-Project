import {
  Container,
  DashboardHeader as Header,
  Main,
  DashboardSideBar as Sidebar,
} from "../../Components";
import "../../styles/dashboard.css";
import { Outlet } from "react-router-dom";

export default function dashboardLayout() {
  return (
    <Container className="dashboard-container">
      <Header title="Dashboard" />
      <Sidebar />
      <Outlet />
    </Container>
  );
}
