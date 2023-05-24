type ButtonProps = {
  title: string;
  label: string;
  path?: string;
  onClick?: () => void;
  primary?: boolean;
  id?: number;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
};
import { NavLink } from "react-router-dom";

export default function Button(props: ButtonProps) {
  return props.path ? (
    <NavLink key={props.id} to={props?.path} className="contacts">
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
      onClick={props.onClick}
      className={`${
        props.primary ? "primary-button" : "secondary-button"
      } | button | clickable ${props.className}`}
    >
      {props.label}
    </button>
  );
}
