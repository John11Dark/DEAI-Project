import Button from "../utils/button";
import Logo from "./logo";
import NavigationBar from "./nav";
import Container from "../utils/container";

export default function Header() {
  return (
    <header id="header" className="header | flex" data-is-interacting="false">
      <Logo tabIndex={1} />
      <NavigationBar />
      <Container className="action-buttons | flex">
        <Button
          tabIndex={9}
          title="Login"
          label="Login"
          path="/login"
          type="button"
        />
        <Button
          tabIndex={8}
          title="join us"
          label="join us"
          path="/register"
          primary
          type="button"
        />
      </Container>
    </header>
  );
}
