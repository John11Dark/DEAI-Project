import { useState } from "react";
import Logo from "./logo";
import ListButton from "../utils/listButton";
import UserAvatar from "../utils/userAvatar";

type DashboardSideBarProps = {
  className?: string;
};

export default function DashboardSideBar({ className }: DashboardSideBarProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside
      tabIndex={2}
      role="navigation"
      aria-expanded={expanded}
      aria-label="Dashboard Side Bar"
      aria-atomic="true"
      aria-live="polite"
      aria-labelledby="dashboard-sidebar"
      className={`dashboard-sidebar | grid | justify-start ${className}`}
    >
      <Logo icon={!expanded} className="side-bar-logo" />
      <ul role="menu" className="grid | center">
        <ListButton
          icon="Dashboard"
          label={expanded ? "Dashboard" : ""}
          path="/dashboard"
        />

        <ListButton icon="List" label={expanded ? "Tasks" : ""} path="/tasks" />

        <ListButton
          icon="Apps"
          label={expanded ? "Platforms" : ""}
          path="/platforms"
        />

        <ListButton
          icon="Performance"
          label={expanded ? "Performance" : ""}
          path="performance"
        />

        <ListButton
          icon="Statics"
          label={expanded ? "Statics" : ""}
          path="statics"
        />

        <ListButton
          icon="Calender"
          label={expanded ? "Appointments" : ""}
          path="appointments"
        />

        <ListButton icon="Chat" label={expanded ? "Chat" : ""} path="/chat" />
      </ul>

      <UserAvatar expanded={expanded} />
    </aside>
  );
}
