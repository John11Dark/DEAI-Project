import { useEffect } from "react";
import { setupDocument } from "../../utils";

export default function forgotPassword() {
  useEffect(() => {
    setupDocument({
      title: "DEAI",
      singlePage: true,
    });
  }, []);
  return <div>forget password</div>;
}
