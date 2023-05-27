import { useState } from "react";
import Logo from "./logo";

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
      onClick={() => setExpanded(!expanded)}
      onBlur={() => setExpanded(false)}
      className={`dashboard-sidebar | grid | justify-start ${className}`}
    >
      <Logo />
      <ul role="menu">
        <li role="menuitem">Menu Item 1</li>
        <li role="menuitem">Menu Item 2</li>
        <li role="menuitem">Menu Item 3</li>
        <li role="menuitem">Menu Item 4</li>
        <li role="menuitem">Menu Item 5</li>
      </ul>
      <Logo />
    </aside>
  );
}
