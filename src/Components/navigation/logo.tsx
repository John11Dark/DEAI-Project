import { NavLink } from "react-router-dom";

type LogoProps = {
  onClick: () => void;
};

export default function Logo(props: LogoProps) {
  return (
    <NavLink key={0} to="/" className="logo-link" onClick={props.onClick}>
      <img
        title="Home"
        src="../../../public/Logo.png"
        alt="Dark Engines Artificial intelligence Logo"
        className="logo"
      />
    </NavLink>
  );
}
