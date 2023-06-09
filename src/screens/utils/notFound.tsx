import { useEffect } from "react";
import { setupDocument } from "../../utils";

type NotFoundProps = {};
export default function NotFound({}: NotFoundProps) {
  useEffect(() => {
    setupDocument({
      title: "DEAI",
      singlePage: true,
    });
  }, []);
  return <div>404 Not Found</div>;
}
