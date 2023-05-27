import Button from "../utils/button";
import Logo from "./logo";
import NavigationBar from "./nav";
import Container from "../utils/container";

export default function Header() {
  return (
    <header id="header" className="header | flex" data-is-interacting="false">
      <Logo />
      <NavigationBar />
      <Container className="action-buttons | flex">
        <Button
          title="Login"
          label="Login"
          path="/login"
          id={6}
          onClick={() => setActiveLink(0)}
        />
        <Button
          id={7}
          title="join us"
          label="join us"
          path="/register"
          onClick={() => setActiveLink(0)}
          primary
        />
      </Container>
    </header>
  );
}
