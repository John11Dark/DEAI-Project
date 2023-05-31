import { Navigate, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";
import { ROUTES } from "../Config";

export default function PrivateNavigator(children: any) {
  const location = useLocation();
  const { user } = useAuth();
  return user ? (
    <Routes>{children}</Routes>
  ) : (
    <Navigate to={ROUTES.WELCOME} state={{ from: location }} replace />
  );
}
