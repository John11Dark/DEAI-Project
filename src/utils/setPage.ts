export default function setupDocument({
  title,
  singlePage,
}: {
  title: string;
  singlePage: boolean;
}) {
  document.title = `${title} | DEAI`;
  if (singlePage) {
    document.documentElement.style.overflow = "hidden";
    document.body.setAttribute("isObserving", "false");
  } else {
    document.documentElement.style.overflow = "auto";
    document.body.setAttribute("isObserving", "true");
  }
}
