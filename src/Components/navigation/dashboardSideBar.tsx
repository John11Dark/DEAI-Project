import React, { useState } from "react";
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
      className={`dashboard-sidebar ${className}`}
      onBlur={() => setExpanded(false)}
      onClick={() => setExpanded(!expanded)}
    >
      <Logo icon={!expanded} className="side-bar-logo" />
      <ul role="menu" className="grid | center">
        <ListButton
          icon="Dashboard"
          label={expanded ? "Dashboard" : ""}
          path="/dashboard"
          pageTitle="Dashboard"
        />

        <ListButton
          icon="List"
          label={expanded ? "Tasks" : ""}
          path="/dashboard/tasks"
          pageTitle="Tasks"
        />

        <ListButton
          icon="Apps"
          label={expanded ? "Platforms" : ""}
          path="/dashboard/platforms"
          pageTitle="Platforms"
        />

        <ListButton
          icon="Performance"
          label={expanded ? "Performance" : ""}
          path="/dashboard/performance"
          pageTitle="Performance"
        />

        <ListButton
          icon="Statics"
          label={expanded ? "Statics" : ""}
          path="/dashboard/statics"
          pageTitle="Statics"
        />

        <ListButton
          icon="Calender"
          label={expanded ? "Appointments" : ""}
          path="/dashboard/appointments"
          pageTitle="Appointments"
        />

        <ListButton
          icon="Chat"
          label={expanded ? "Chat" : ""}
          path="/dashboard/chat"
          pageTitle="Chat"
        />
      </ul>

      <UserAvatar expanded={expanded} />
    </aside>
  );
}
