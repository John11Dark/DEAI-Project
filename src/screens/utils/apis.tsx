import { useEffect } from "react";
import { setupDocument } from "../../utils";
import { Maintenance } from "..";

export default function Docs() {
  // useEffect(() => {
  //   setupDocument({
  //     title: "APIs",
  //     singlePage: true,
  //   });
  // }, []);
  return <Maintenance title="APIs" />;
}
