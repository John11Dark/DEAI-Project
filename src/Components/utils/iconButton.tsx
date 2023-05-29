import Icon from "./icon";

type iconButtonProps = {
  id?: string;
  className?: string;
  iconClassName?: string;
  icon: string;
  title: string;
  onclick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function IconButton({
  id,
  iconClassName,
  className,
  title,
  icon,
  onclick,
  type = "button",
}: iconButtonProps) {
  return (
    <button
      id={id}
      title={title}
      className={`icon-button-dash-head | clickable ${className}`}
      type={type}
      onClick={onclick}
    >
      <Icon
        name={icon}
        className={`button-icon-dash-head | ${iconClassName}`}
      />
    </button>
  );
}
