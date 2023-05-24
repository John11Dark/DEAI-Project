import { Formik, Form as FormikForm } from "formik";
import Yup from "yup";

type FormProps = {
  action?: string;
  method?: string;
  name?: string;
  id?: string;
  enctype?: string;
  className?: string;
  children: React.ReactNode;
  onSubmit: (values: Record<string, any>) => void;
  onReset?: (values: Record<string, any>) => void;
  initialValues: Record<string, any>;
  validationSchema?: Yup.Schema<Record<string, any>>;
};

export default function Form(props: FormProps) {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={props.validationSchema}
      onReset={props.onReset}
    >
      <FormikForm
        id={props.id}
        autoComplete="on"
        encType={
          props.enctype ? props.enctype : "application/x-www-form-urlencoded"
        }
        spellCheck="true"
        className={`form | ${props.className}`}
        action={props.action}
        method={props.method ? props.method : "POST"}
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(event);
        }}
      >
        {props.children}
      </FormikForm>
    </Formik>
  );
}
