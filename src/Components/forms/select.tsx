import { useState } from "react";
import Icon from "../utils/icon";
import ToolTip from "../utils/tooltip";

type SelectProps = {
  name?: string;
  label: string;
  className?: string;
  id: string;
  type?: string;
  required?: boolean;
  selectedValue?: number;
  title: string;
  options: Array<{ index: number; value: string; option: string }>;
  tabIndex?: number;
  onChange?: (selectedValue: number | undefined) => void;
  onHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
};
export default function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <div
      tabIndex={props.tabIndex}
      id={props.id}
      className={`custom-select | ${props.className}`}
      onClick={() => setIsOpen((prevuesValue) => !prevuesValue)}
      onBlur={() => setIsOpen(false)}
      onMouseEnter={() => setTooltipVisible((previousValue) => !previousValue)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {/* {props.title && <ToolTip visible={tooltipVisible} title={props.title} />} */}

      <label className={"visually-visible"}>
        {props.selectedValue !== undefined
          ? props.options[props.selectedValue].option
          : props.label}
      </label>
      <Icon name="DownArrow" />
      <ul
        role="list"
        data-open={isOpen.toString()}
        className={`select-field-drop-down | ${props.className}`}
      >
        {props.options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              props.onChange && props.onChange(option.index);
              setIsOpen(false);
            }}
            key={option.value}
            tabIndex={index}
            className={"option-value"}
          >
            {option.option}
          </li>
        ))}
      </ul>
    </div>
  );
}
