import Icon from "../utils/icon";
import ListButton from "../utils/listButton";
import ThemeButton from "../utils/themeButton";
import DashboardDropdown from "../utils/dropdown/dashboardDropdown";
export default function dashboardHeader() {
  return (
    <header className="dashboard-header | flex | justify-between">
      <div>
        <div className="flex | center">
          <h1 className="dashboard-title">Dashboard</h1>
          <Icon
            name="Reload"
            className="dashboard-icon | clickable"
            fill="var(--primary-color-300-50)"
            onClick={() => console.log("Reload")}
          />
        </div>
        <DashboardDropdown />
      </div>
      <div className="">
        <ListButton
          id="notifications"
          title="Notifications"
          icon="Notifications"
          path="/dashboard/notifications"
        />
        <ListButton id="messages" title="Messages" icon="Email" path="/" />
        <ListButton id="settings" title="Settings" icon="Settings" path="/" />
        <ThemeButton />
      </div>
    </header>
  );
}
