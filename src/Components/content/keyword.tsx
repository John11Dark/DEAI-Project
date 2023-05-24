type keywordProps = {
  text: string;
  className?: string;
  attr?: string;
};
export default function Keyword(props: keywordProps) {
  return (
    <span data-attr={props.attr} className={`keyword | ${props?.className}`}>
      {props.text}{" "}
    </span>
  );
}
