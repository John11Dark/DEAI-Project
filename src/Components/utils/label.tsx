import React from "react";
import Icon from "./icon";

type LabelProps = {
  className?: string;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onMouseOver: (event: React.MouseEvent<SVGSVGElement>) => void;
};
export default function Label({ className, type, onMouseOver }: LabelProps) {
  return (
    <Icon
      name={"Label"}
      size={18}
      onMouseOver={onMouseOver}
      className={`label-${type} | ${className}`}
    />
  );
}
