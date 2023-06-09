import React, { useEffect } from "react";
import { setupDocument } from "../../utils";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Config";
import "../../styles/maintenance.css";
type Props = { title: string; className?: string };
export default function underGoingMaintenance({ title, className }: Props) {
  useEffect(() => {
    setupDocument({
      title: title,
      singlePage: true,
    });
  }, []);
  return (
    <section className={`grid | center | ${className}`}>
      <img
        src="/maintenance-left.png"
        alt="Illustrations"
        className="section-img | section-img-left"
      />
      <article className="section-article | grid | center">
        <h1 className="title | section-title">Under Going Maintenance</h1>
        <p className="paragraph | section-paragraph">
          We apologize for the inconvenience, but this page is currently
          undergoing maintenance. Please check back later. or{" "}
          <Link
            to={ROUTES.CONTACT}
            className="inline-link-paragraph | section-paragraph"
          >
            contact us!
          </Link>
        </p>
      </article>
      <img
        src="/maintenance-right.png"
        alt="Illustrations"
        className="section-img | section-img-right"
      />
    </section>
  );
}
