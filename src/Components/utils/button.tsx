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
  icon?: string;
};
import { NavLink } from "react-router-dom";
import Icon from "./icon";
import colors from "../../styles/colors";

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
      title={props.title}
      tabIndex={props.tabIndex}
      key={props.id}
      type={props.type}
      onClick={props.onClick}
      className={`${
        props.primary ? "primary-button" : "secondary-button"
      } | button | clickable ${props.className} | ${
        props.icon ? "flex | center | has-icon" : ""
      } `}
    >
      {props.icon && <Icon name={props.icon} fill={colors.light} />}
      {props.label}
    </button>
  );
}
