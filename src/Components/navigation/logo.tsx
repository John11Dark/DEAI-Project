import { NavLink } from "react-router-dom";

type LogoProps = {
  className?: string;
  icon?: boolean;
  size?: number;
};

export default function Logo(props: LogoProps) {
  return (
    <NavLink key={0} to="/" className="logo-link">
      <img
        title="Home"
        src={`../../../public/${props.icon ? "icon" : "logo"}.png`}
        alt="Dark Engines Artificial intelligence Logo"
        className="logo"
        data-icon={props.icon}
      />
    </NavLink>
  );
}
