import React from "react";
import Icon from "./icon";
import { Link } from "react-router-dom";

type ListButtonProps = {
  id?: string;
  title?: string;
  label?: string;
  icon: string;
  className?: string;
  role?: string;
  path: string;
  pageTitle?: string;
};

export default function ListButton({
  id,
  title,
  label,
  icon,
  className,
  role,
  path,
  pageTitle,
}: ListButtonProps) {
  return (
    <li role={role} aria-label={title} className="contents">
      <Link
        to={path}
        id={id}
        title={title}
        className={`list-button | clickable ${className}`}
        type="button"
        state={{ title: pageTitle }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          id={id}
          title={title}
          className={`list-button | clickable ${className}`}
          type="button"
        >
          <Icon name={icon} className="button-icon" />
          {label && <span className="btn-label">{label}</span>}
        </button>
      </Link>
    </li>
  );
}
