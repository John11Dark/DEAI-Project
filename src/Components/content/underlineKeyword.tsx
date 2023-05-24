type UnderlineKeywordProps = {
  text: string;
  className?: string;
  attr?: string;
  path?: string;
};
export default function UnderlineKeyword({
  path = "/underline.png",
  text,
  ...props
}: UnderlineKeywordProps) {
  return (
    <div className="underline-keyword-container">
      <span
        data-attr={props.attr}
        className={`underline-keyword-text | ${props?.className}`}
      >
        {text}{" "}
      </span>
      <img
        onError={(e) => {
          console.warn(`image src not found! : ${path}, \n${e}`);
          e.currentTarget.style.display = "none";
        }}
        src={path}
        aria-hidden="true"
        aria-expanded="false"
        className="underline-keyword-image | none-pointer-events"
      />
    </div>
  );
}
