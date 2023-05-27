import Icon from "../utils/icon";
import ListButton from "../utils/listButton";
import ThemeButton from "../utils/themeButton";
import DashboardDropdown from "../utils/dropdown/dashboardDropdown";

type Props = {
  title: string;
  onReloadClick?: () => void;
};

export default function dashboardHeader({ title, onReloadClick }: Props) {
  return (
    <header className="dashboard-header | flex | justify-between">
      <div className="dashboard-title-container | grid">
        <div className="flex | center | dash-title-container">
          <h1 className="dashboard-title">{title}</h1>
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
        <ListButton id="Task" title="Task" icon="Add" path="/" />
        <ListButton
          id="notifications"
          title="Notifications"
          icon="Notifications"
          path="/dashboard/notifications"
        />
        <ListButton id="messages" title="Messages" icon="Email" path="/" />
        <ThemeButton />
      </div>
    </header>
  );
}
