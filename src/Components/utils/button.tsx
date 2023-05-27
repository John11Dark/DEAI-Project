type ButtonProps = {
  title: string;
  label: string;
  path?: string;
  onClick?: () => void;
  primary?: boolean;
  id?: number;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  tabIndex?: number;
};
import { NavLink } from "react-router-dom";

export default function Button(props: ButtonProps) {
  return props.path ? (
    <NavLink
      tabIndex={props.tabIndex}
      key={props.id}
      to={props?.path}
      className="contacts"
    >
      <button
        type={props.type}
        title={props.title}
        onClick={props.onClick}
        className={`${
          props.primary ? "primary-button" : "secondary-button"
        } | button | clickable ${props.className} `}
      >
        {props.label}
      </button>
    </NavLink>
  ) : (
    <button
      tabIndex={props.tabIndex}
      key={props.id}
      type={props.type}
      onClick={props.onClick}
      className={`${
        props.primary ? "primary-button" : "secondary-button"
      } | button | clickable ${props.className}`}
    >
      {props.label}
    </button>
  );
}
