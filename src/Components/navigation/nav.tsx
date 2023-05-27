import { NavLink } from "react-router-dom";

type Link = {
  id?: number;
  tabIndex?: number;
  name: string;
  path: string;
};

const links: Link[] = [
  {
    id: 11,
    name: "Docs",
    path: "/docs",
    tabIndex: 2,
  },
  {
    id: 22,
    name: "Services",
    path: "/services",
    tabIndex: 3,
  },
  {
    id: 33,
    name: "Contact",
    path: "/contact",
    tabIndex: 4,
  },
  {
    id: 44,
    name: "About",
    path: "/about",
    tabIndex: 5,
  },
  {
    id: 58,
    name: "APIs",
    path: "/apis",
    tabIndex: 6,
  },
];

type LinkItemProps = {
  link: Link;
};

const LinkItem = ({ link }: LinkItemProps) => (
  <li
    tabIndex={link.tabIndex}
    className="link"
    role="menuitem"
    aria-label={link.name}
    aria-activedescendant="true"
    aria-current="page"
    aria-labelledby="true"
  >
    <NavLink
      to={link.path}
      className="link"
      role="menuitem"
      aria-label={link.name}
      aria-activedescendant="true"
      aria-current="page"
      aria-labelledby="true"
      key={link.id}
      style={({ isActive }) => {
        return isActive
          ? { color: "var(--primary-color)" }
          : { color: "var(--primary-color-light)" };
      }}
    >
      {link.name}
    </NavLink>
  </li>
);

/**
 * @description NavigationBar Component
 * @returns {JSX.Element} JSX NavigationBar Component
 */
export default function NavigationBar(): JSX.Element {
  return (
    <nav
      className="main-menu | flex"
      id="mainMenu"
      aria-label="navigation links"
      aria-expanded="false"
      data-visible="false"
    >
      <ul role="menubar" className="links-list | contents">
        {links.map((link) => (
          <LinkItem link={link} key={link.id} />
        ))}
      </ul>
    </nav>
  );
}
