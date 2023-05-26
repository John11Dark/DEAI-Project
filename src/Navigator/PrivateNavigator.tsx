import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

type PrivateNavigatorProps = {
  component: React.ComponentType;
  path: string;
  exact?: boolean;
  rest?: any;
};

export default function PrivateNavigator(
  props: PrivateNavigatorProps
): JSX.Element {
  const { component: Component, ...rest } = props;
  const { user } = useAuth();
  return (
    <Route
      {...rest}
      element={user ? <Component /> : <Navigate to="/welcome" />}
    />
  );
}
