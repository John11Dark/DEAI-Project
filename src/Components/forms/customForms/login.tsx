import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input";
import Button from "../../utils/button";
import auth from "../../../api/auth";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Config";

export default function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .max(16, "Must be 16 characters or less")
      .required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  async function handleSubmit(
    { email, password }: typeof initialValues,
    { resetForm }: any
  ) {
    auth.login({ email, password });
    resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="login-form">
        <Input name="email" label="Email" id="email" type="email" />
        <Input name="password" label="password" id="password" type="text" />
        <Button
          className="login-button"
          type="submit"
          label="Login"
          title="Login"
          primary
          icon="Login"
        />
        <p className="link-paragraph">
          Do not have an account?
          <Link
            to={ROUTES.REGISTER}
            className="inline-link | primary | link | clickable"
          >
            Register
          </Link>
        </p>
      </Form>
    </Formik>
  );
}
