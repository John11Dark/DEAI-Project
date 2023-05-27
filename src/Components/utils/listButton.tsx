import React from "react";
import Icon from "./icon";

type ListButtonProps = {
  id?: string;
  title?: string;
  label?: string;
  icon: string;
  className?: string;
};

export default function ListButton({
  id,
  title,
  label,
  icon,
  className,
}: ListButtonProps) {
  return (
    <button
      id={id}
      title={title}
      className={`list-button | clickable ${className}`}
      type="button"
    >
      <Icon name={icon} className="button-icon" />
      {label && <span className="btn-label">{label}</span>}
    </button>
  );
}
