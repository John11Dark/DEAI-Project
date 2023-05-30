import { createContext, useEffect, useState } from "react";
import { Auth } from "../api";
import { AuthNavigator } from "../Navigator";
import { useNavigate } from "react-router-dom";
type AuthContextType = {
  user: userType | undefined;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: registerCredentials) => Promise<void>;
  logout: () => Promise<void>;
};

type LoginCredentials = {
  email: string;
  password: string;
};

type registerCredentials = {
  email: string;
  password: string;
  name: string;
};

type userType = ReturnType<typeof Auth.getUser>;

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  login: async (credentials: LoginCredentials) => {},
  logout: async () => {},
  register: async (credentials: LoginCredentials) => {},
});

function useAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState<userType | undefined>(undefined);
  const [isReady, setIsReady] = useState(false);

  const login = async (credentials: LoginCredentials) => {
    const user = await Auth.login(credentials);
    setUser(user);
    navigate("/");
  };

  const logout = async () => {
    setUser(undefined);
    await Auth.logout();
    navigate("/welcome");
  };

  const register = async (credentials: LoginCredentials) => {
    const user = await Auth.login(credentials);
    setUser(user);
    navigate("/");
  };

  useEffect(() => {
    const loadUser = async () => {
      const user: userType = await Auth.getUser();
      setUser(user);
      setIsReady(true);
    };
    loadUser();
  }, []);

  return { user, register, login, logout, isReady };
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  const authData = useAuth();

  if (!authData.isReady) {
    return <AuthNavigator />;
  }

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
