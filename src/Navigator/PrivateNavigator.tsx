import { Navigate, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

export default function PrivateNavigator(children: any) {
  const location = useLocation();
  const { user } = useAuth();
  return user ? (
    <Routes>{children}</Routes>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
