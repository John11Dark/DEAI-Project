import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export function useAuth() {
  const user = {
    id: 1,
    name: "John",
    surname: "Muller",
    email: "info@johnmuller.eu",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  return { user };
}
