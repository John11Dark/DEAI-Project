import Button from "../utils/button";
import { Link } from "../../types/Link.types";
import Logo from "./logo";
import NavigationBar from "./nav";
import Container from "../utils/container";
import { useRef, useState } from "react";

type HeaderProps = {
  links: Link[];
};

export default function Header(props: HeaderProps) {
  const [activeLink, setActiveLink] = useState(0);

  const headerRef = useRef<HTMLElement>(null);

  return (
    <header
      ref={headerRef}
      id="header"
      className="header | flex"
      data-is-interacting="false"
    >
      <>
        <Logo onClick={() => setActiveLink(0)} />
        <NavigationBar links={props.links} activeLink={activeLink} />
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
      </>
    </header>
  );
}
