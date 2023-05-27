import { NavLink } from "react-router-dom";

type LogoProps = {};

export default function Logo(props: LogoProps) {
  return (
    <NavLink key={0} to="/" className="logo-link">
      <img
        title="Home"
        src="../../../public/Logo.png"
        alt="Dark Engines Artificial intelligence Logo"
        className="logo"
      />
    </NavLink>
  );
}
