import { Header, Main } from "../../Components";
import { Outlet } from "react-router-dom";

export default function UtilsLayout() {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
}
