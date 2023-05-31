import React, { useState } from "react";
import Logo from "./logo";
import ListButton from "../utils/listButton";
import UserAvatar from "../utils/userAvatar";
import { ROUTES } from "../../Config";

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
          path={ROUTES.DASHBOARD}
          pageTitle="Dashboard"
        />

        <ListButton
          icon="List"
          label={expanded ? "Tasks" : ""}
          path={ROUTES.DASHBOARD_TASKS}
          pageTitle="Tasks"
        />

        <ListButton
          icon="Apps"
          label={expanded ? "Platforms" : ""}
          path={ROUTES.DASHBOARD_PLATFORMS}
          pageTitle="Platforms"
        />

        <ListButton
          icon="Performance"
          label={expanded ? "Performance" : ""}
          path={ROUTES.DASHBOARD_PERFORMANCE}
          pageTitle="Performance"
        />

        <ListButton
          icon="Statics"
          label={expanded ? "Statics" : ""}
          path={ROUTES.DASHBOARD_STATICS}
          pageTitle="Statics"
        />

        <ListButton
          icon="Calender"
          label={expanded ? "Appointments" : ""}
          path={ROUTES.DASHBOARD_APPOINTMENTS}
          pageTitle="Appointments"
        />

        <ListButton
          icon="Chat"
          label={expanded ? "Chat" : ""}
          path={ROUTES.DASHBOARD_CHAT}
          pageTitle="Chat"
        />
      </ul>

      <UserAvatar expanded={expanded} />
    </aside>
  );
}
