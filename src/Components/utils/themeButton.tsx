import { useState } from "react";
import Icon from "./icon";

type themeButtonProps = {
  id?: string;
  className?: string;
};

/**
 * Changes the theme of the page based on the provided theme and color options.
 * Updates the `ColorSchemeMetaTag` and `localStorage` to reflect the new theme.
 * @param {string} theme - The current theme. If null or undefined, the `theme` attribute of `themeButton` will be used.
 * @param {HTMLElement} themeButton - The HTML button that triggered the theme change. Holds the current theme value as an attribute called `theme`.
 * @param {Object} darkThemeColors - An object of CSS variables and their corresponding color values for the "dark" theme.
 * @param {Object} lightThemeColors - An object of CSS variables and their corresponding color values for the "light" theme.
 * @param {HTMLMetaElement} ColorSchemeMetaTag - The HTML meta tag that displays the current color scheme of the page.
 * @param {string} tileColor - The color value for the browser navigation bar or browser color.
 */
export function Theme(theme: boolean) {
  const currentTheme = theme ? "dark" : "light";
  const lightThemeColors = {
    "--primary-color-light": "#fbfdf9",
    "--primary-color-dark": "#1f1f21",
    "--background-color": "#1f1f21",
    "--input-background-color": "#303327",
  };

  const darkThemeColors = {
    "--primary-color-light": "#1f1f21",
    "--primary-color-dark": "#fbfdf9",
    "--background-color": "#fbfdf9",
    "--input-background-color": "#303327",
  };
  const ColorSchemeMetaTag = document.querySelector("meta[name=color-scheme]");
  let tileColor = "";
  let newTheme = "";

  if (currentTheme === "light") {
    newTheme = "dark";
    updateCSSVariables(darkThemeColors);
    tileColor = darkThemeColors["--background-color"];
  } else if (currentTheme === "dark") {
    newTheme = "light";
    updateCSSVariables(lightThemeColors);
    tileColor = lightThemeColors["--background-color"];
  } else {
    console.error(`Invalid theme: ${currentTheme}`);
    return;
  }

  // Update the `ColorSchemeMetaTag` and `localStorage` with the new theme.
  ColorSchemeMetaTag?.setAttribute("content", `${newTheme} light`);
  document.body.style.colorScheme = `${newTheme} light`;
  // Set the browser navigation bar or browser color.
  setTileColor(tileColor);

  /**
   * Updates the CSS variables on the `root` element with the provided `colors`.
   * @param {Object} colors - An object of CSS variables and their corresponding color values.
   */
  function updateCSSVariables(colors: Object) {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(colors)) {
      root.style.setProperty(key, value);
    }
  }

  /**
   * Sets the color of the browser navigation bar or browser color to the provided `color`.
   * @param {string} color - The color value to set.
   */
  function setTileColor(color: string) {
    const tileList = document.querySelectorAll("[tile-control]");
    for (const tile of tileList) {
      tile.setAttribute("content", color);
    }
  }
}

export default function ThemeButton({ id, className }: themeButtonProps) {
  const [theme, setTheme] = useState(true);
  Theme(theme);
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
