import { useLocation } from "react-router-dom";
import Icon from "../utils/icon";
import ThemeButton from "../utils/themeButton";
import DashboardDropdown from "../utils/dropdown/dashboardDropdown";
import IconButton from "../utils/iconButton";

type Props = {
  title: string;
  onReloadClick?: () => void;
};

export default function dashboardHeader({ title, onReloadClick }: Props) {
  const location = useLocation();
  return (
    <header className="dashboard-header | flex | justify-between">
      <div className="dashboard-title-container | grid">
        <div className="flex | center | dash-title-container">
          <h1 className="dashboard-title">
            {location.state ? location.state.title : title}
          </h1>
          <Icon
            name="Reload"
            className="dashboard-icon | clickable"
            fill="var(--primary-color-50)"
            size={20}
            onClick={onReloadClick}
          />
        </div>
        <DashboardDropdown />
      </div>
      <div className="flex | center">
        <IconButton
          id="Task"
          title="Task"
          icon="Add"
          iconClassName="translate-x-10"
        />
        <IconButton
          id="notifications"
          title="Notifications"
          icon="Notifications"
        />
        <IconButton id="messages" title="Messages" icon="Email" />
        <ThemeButton />
      </div>
    </header>
  );
}
