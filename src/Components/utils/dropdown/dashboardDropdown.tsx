import Icon from "../icon";

type Props = {
  className?: string;
  id?: string;
  onClick?: () => void;
  title?: string;
  icon?: string;
  fill?: string;
};

export default function DashboardDropdown({
  className,
  id,
  onClick,
  title,
  icon,
  fill,
}: Props) {
  return (
    <div className="flex | categorize-drop-down-container | clickable">
      <span className="categorize-drop-down-label">Summary</span>
      <Icon name="DownArrow" size={15} className="categorize-drop-down-icon" />
    </div>
  );
}
