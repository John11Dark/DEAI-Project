import { NavLink } from "react-router-dom";

type Link = {
  id?: number;
  name: string;
  path: string;
};
export default function NavigationBar() {
  const links: Link[] = [
    {
      id: 1,
      name: "Docs",
      path: "/docs",
    },
    {
      id: 2,
      name: "Services",
      path: "/services",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "About",
      path: "/about",
    },
    {
      id: 5,
      name: "APIs",
      path: "/apis",
    },
  ];

  return (
    <nav
      className="main-menu | flex"
      id="mainMenu"
      aria-label="navigation links"
      aria-expanded="false"
      data-visible="false"
    >
      <ul role="list" className="links-list | contents">
        {links.map((link: Link) => (
          <li key={link.id} className="contents">
            <NavLink
              key={link.id}
              to={link.path}
              className={`link`}
              style={({ isActive }) => {
                return isActive
                  ? { color: "var(--primary-color)" }
                  : { color: "var(--primary-color-light)" };
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
