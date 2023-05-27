import {
  Container,
  DashboardHeader as Header,
  DashboardSideBar as Sidebar,
} from "../../Components";
import "../../styles/dashboard.css";
import { Outlet } from "react-router-dom";

export default function dashboardLayout() {
  return (
    <Container className="dashboard-container">
      <Header />
      <Sidebar />
      <Container className="dashboard-content">
        <Outlet />
      </Container>
    </Container>
  );
}
