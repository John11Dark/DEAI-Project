import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input";
import Button from "../../utils/button";
import auth from "../../../api/auth";
import IllustrationImageElement from "../../notify/illustrationImageElement";

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
    <section className="login-form-section">
      <IllustrationImageElement
        className="login-form-illustration"
        imgSrc="https://res.cloudinary.com/dk2uwbtnl/image/upload/v1628584759/illustrations/login_illustration_1_xqjz3y.svg"
        message="Login to your account"
      />
      <h1 className="login-form-title">Login</h1>

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
          />
        </Form>
      </Formik>
    </section>
  );
}
