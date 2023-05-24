import { NavLink } from "react-router-dom";
import { Link } from "../../types/Link.types";
import { useState } from "react";
type navigationProps = {
  links: Link[];
  activeLink?: number;
};
export default function NavigationBar(props: navigationProps) {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav
      className="main-menu | flex"
      id="mainMenu"
      aria-label="navigation links"
      aria-expanded="false"
      data-visible="false"
    >
      <ul role="list" className="links-list | contents">
        {props.links.map((link: Link) => (
          <li key={link.id} className="contents">
            <NavLink
              key={link.id}
              to={link.path}
              className={link.className}
              data-active={activeLink === link.id}
              onClick={() => {
                setActiveLink(link.id);
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
