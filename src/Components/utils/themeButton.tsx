import { useState } from "react";
import Icon from "./icon";

type themeButtonProps = {
  id?: string;
  className?: string;
};

export default function ThemeButton({ id, className }: themeButtonProps) {
  const [theme, setTheme] = useState(true);
  return (
    <button
      id={id}
      title={`Switch to ${theme ? "Light Mode" : "Dark Mode"}`}
      className={`theme-button | clickable ${className}`}
      type="button"
      onClick={() => setTheme(!theme)}
    >
      <Icon
        name={theme ? "Moon" : "Sun"}
        className={`theme-icon ${theme ? "translate-x-10" : ""}`}
      />
    </button>
  );
}
