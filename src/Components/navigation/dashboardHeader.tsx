import Icon from "../utils/icon";
import ListButton from "../utils/listButton";
import ThemeButton from "../utils/themeButton";
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
        <p className="dashboard-subtitle">summary</p>
      </div>
      <div className="">
        <ListButton
          id="notifications"
          title="Notifications"
          icon="Notifications"
        />
        <ListButton id="messages" title="Messages" icon="Email" />
        <ListButton id="settings" title="Settings" icon="Settings" />
        <ThemeButton />
      </div>
    </header>
  );
}
