import React from "react";
import Icons, { IconName } from "../../assets/icons";
import colors from "../../styles/colors";

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  id?: string;
  fill?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  viewBox?: string;
  type?: "button" | "submit" | "reset";
  onMouseOver?: (event: React.MouseEvent<SVGSVGElement>) => void;
  shadow?: boolean;
}

export default function Icon({
  name,
  size = 24,
  className = "",
  id = "",
  fill = colors.primary,
  onClick,
  onMouseOver,
  shadow = false,
}: IconProps) {
  if (!(name in Icons)) {
    console.warn(`Invalid icon name: ${name}`);
    return (
      <svg
        aria-label="invalid icon"
        role="img"
        width={size}
        height={size}
        fill={fill}
        id={id}
        viewBox="0 0 384 512"
        className={`md-svg-icon | invalid-icon| ${className}`}
        preserveAspectRatio="xMinYMin meet"
        xmlns="http://www.w3.org/2000/svg"
        onClick={(e) => onClick}
        onMouseOver={(e) => onMouseOver}
      >
        <path
          d={`M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z`}
          fill={fill}
          transform="translate(100, 32)"
        />
      </svg>
    );
  }
  const { viewBox = "0 0 512 512", d } = Icons[name];
  return (
    <svg
      aria-label={`${name} icon`}
      role="img"
      width={size}
      height={size}
      fill={fill}
      id={id}
      viewBox={viewBox}
      className={`md-svg-icon | ${className} | ${
        onClick ? "clickable" : ""
      } | ${shadow ? "icon-shadow" : ""}`}
      preserveAspectRatio="xMinYMin meet"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d={d} fill={fill} />
    </svg>
  );
}
