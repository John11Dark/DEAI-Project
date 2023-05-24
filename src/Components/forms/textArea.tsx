import { useField } from "formik";
import Icon from "../utils/icon";
import { IconName } from "../../assets/icons";
import ErrorMessage from "./errorMessage";

type InputProps = {
  name: string;
  label: string;
  id: string;
  className?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  icon?: IconName;
  iconSize?: number;
};

export default function TextArea(props: InputProps) {
  const [field, meta] = useField(props.id);

  return (
    <article className={`field-container | ${props.className}`}>
      <label
        id="inputFiledLabel"
        data-has-content={meta.value ? "true" : "false"}
        has-content="false"
        className={`field-label | allow-label-flow  ${props.className}`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        aria-label={props.label}
        aria-required={props.required}
        aria-invalid={meta.touched && meta.error ? "true" : "false"}
        aria-describedby={props.label}
        placeholder={props?.placeholder}
        required={props.required}
        type={props.type}
        className={`input-filed | ${props.className}`}
        autoComplete="on"
        pattern={props.pattern}
        minLength={props.minLength}
        maxLength={props.maxLength}
        min={props.min}
        max={props.max}
        {...field}
      />
      {props.icon && (
        <Icon
          name={props.icon}
          size={props.iconSize ? props.iconSize : 24}
          className="field-icon"
        />
      )}
      {meta.touched && meta.error && (
        <ErrorMessage
          className="input-filed-error-message"
          message={meta.error}
        />
      )}
    </article>
  );
}
