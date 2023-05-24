import { Route } from "react-router-dom";

type LinkProps = {
  path: string;
  element: JSX.Element;
  active: boolean;
  onClick: () => (event: React.MouseEvent) => void;
};

export default function Link({ path, element, active, onClick }: LinkProps) {
  return <h1>link</h1>;
}
