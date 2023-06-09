import { useEffect } from "react";
import { setupDocument } from "../../utils";
import { Maintenance } from "..";

export default function Docs() {
  // useEffect(() => {
  //   setupDocument({
  //     title: "About",
  //     singlePage: true,
  //   });
  // }, []);
  return <Maintenance title="About" />;
}
