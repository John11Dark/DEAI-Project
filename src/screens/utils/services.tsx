import { useEffect } from "react";
import { Maintenance } from "..";
import { setupDocument } from "../../utils";

export default function Services() {
  // useEffect(() => {
  //   setupDocument({
  //     title: "Services",
  //     singlePage: true,
  //   });
  // }, []);
  return <Maintenance title="Services" />;
}
