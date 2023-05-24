type ToolTipProps = {
  title: string;
  className?: string;
  id?: string;
  onHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
  visible: boolean;
};

export default function ToolTip(props: ToolTipProps) {
  return (
    <div
      id={props.id}
      className={`tooltip-container | `}
      data-visible={props.visible}
      onMouseOver={props.onHover}
    >
      <label className={"tooltip-label"}>{props.title}</label>
    </div>
  );
}
