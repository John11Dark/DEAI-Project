import { Header, Main } from "../../Components";
import "../../styles/dashboard.css";
import { Outlet } from "react-router-dom";

export default function UtilsLayout() {
  return (
    <Main>
      <Header links={[]} />
      <Outlet />
    </Main>
  );
}
