import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  icon?: boolean;
  size?: number;
  tabIndex?: number;
};

export default function Logo(props: LogoProps) {
  return (
    <Link tabIndex={props.tabIndex} key={0} to="/" className="logo-link">
      <img
        title="Home"
        src={`./${props.icon ? "icon" : "logo"}.png`}
        alt="Dark Engines Artificial intelligence Logo"
        className="logo"
        data-icon={props.icon}
      />
    </Link>
  );
}
