import Icon from "./icon";

type ButtonProps = {
  title: string;
  label: string;
  icon: string;
  onClick?: () => void;
  id?: string;
  className?: string;
  tabIndex?: number;
};

export default function IconLabelButton(props: ButtonProps) {
  return (
    <button
      id={props.id}
      key={props.id || props.title}
      tabIndex={props.tabIndex}
      type="button"
      onClick={props.onClick}
      className={`label-icon-button | clickable | flex | ${props.className}`}
    >
      <Icon name={props.icon} className="label-icon" size={18} shadow />
      {props.label}
    </button>
  );
}
