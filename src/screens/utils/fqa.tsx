import { useEffect } from "react";
import { Maintenance } from "..";
import { setupDocument } from "../../utils";

export default function FQA() {
  // useEffect(() => {
  //   setupDocument({
  //     title: "FQA",
  //     singlePage: true,
  //   });
  // }, []);
  return <Maintenance title="FQA" />;
}
