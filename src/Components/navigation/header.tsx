import Button from "../utils/button";
import Logo from "./logo";
import NavigationBar from "./nav";
import Container from "../utils/container";
import { ROUTES } from "../../Config";
import { useAuth } from "../../hooks";

export default function Header() {
  const { user } = useAuth();
  return (
    <header id="header" className="header | flex" data-is-interacting="false">
      <Logo tabIndex={1} />
      <NavigationBar />
      <Container className="action-buttons | flex">
        {user ? (
          <Button
            tabIndex={8}
            title="dashboard"
            label="dashboard"
            path={ROUTES.DASHBOARD}
            primary
            type="button"
          />
        ) : (
          <>
            <Button
              tabIndex={9}
              title="Login"
              label="Login"
              path={ROUTES.LOGIN}
              type="button"
            />
            <Button
              tabIndex={8}
              title="join us"
              label="join us"
              path={ROUTES.REGISTER}
              primary
              type="button"
            />
          </>
        )}
      </Container>
    </header>
  );
}
