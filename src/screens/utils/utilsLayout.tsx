import { Header } from "../../Components";
import { Outlet } from "react-router-dom";

export default function UtilsLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
