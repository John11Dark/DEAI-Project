import { useField } from "formik";
import Icon from "../utils/icon";
import { IconName } from "../../assets/icons";
import ErrorMessage from "./errorMessage";

type InputProps = {
  name: string;
  label?: string;
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

export default function Input(props: InputProps) {
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

/*
*
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

type InputProps = {
  name: string;
  label: string;
  className?: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  value?: string;
  parentClass?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onInvalid?: (event: React.FormEvent<HTMLInputElement>) => void;
  onReset?: (event: React.FormEvent<HTMLInputElement>) => void;
  icon?: IconName;
};

export default function Input(props: InputProps) {
  const [error, setError] = useState(false);
  const { errors, handleChange, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (errors[props.name as string]) {
      setError(true);
    } else {
      setError(false);
    }
  }, [errors, props.name]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
    setFieldValue(props.name, event.target.value);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const label = event.target.previousElementSibling as HTMLElement;
    label.setAttribute("data-has-content", "true");
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const label = event.target.previousElementSibling as HTMLElement;
    if (!event.target.value) {
      label.removeAttribute("data-has-content");
    }
  };

  return (
    <article className={`field-container | ${props.parentClass}`}>
      <label
        className={`field-label | allow-label-flow ${props.className}`}
        htmlFor={props.id}
        data-has-content={props.value ? "true" : undefined}
      >
        {props.label}
      </label>
      <input
        aria-label={props.label}
        aria-required={props.required}
        aria-invalid={props.required}
        aria-describedby={props.label}
        placeholder={props.placeholder}
        required={props.required}
        type={props.type}
        className={`input-field | ${props.className}`}
        autoComplete="on"
        pattern={props.pattern}
        minLength={props.minLength}
        maxLength={props.maxLength}
        min={props.min}
        max={props.max}
        value={props.value}
        id={props.id}
        name={props.name}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      {props.icon && (
        <Icon name={props.icon} size={24} className="field-icon" />
      )}
      {error && (
        <ErrorMessage
          className="input-filed-error-message"
          message={"Something went wrong"}
        />
      )}
    </article>
  );
}


*/
