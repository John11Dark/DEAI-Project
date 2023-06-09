import React, { useState } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import Input from "../input";
import Button from "../../utils/button";
import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage";
import { ROUTES } from "../../../Config";

export default function SignUpForm(onSubmit: any) {
  const validationSchema = Yup.object({
    firstName: Yup.string().min(2).max(20).required("First Name is required"),
    lastName: Yup.string().min(2).max(20).required("Last Name is required"),
    username: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8)
      .max(15, "Must be 15 characters or less")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), undefined],
      "Passwords must match"
    ),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [error, setError] = useState("");
  // ! create a custom alert to show server errors
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="sign-up-form">
        <Input
          name="firstName"
          label="First Name"
          id="firstName"
          type="text"
          required
        />
        <Input
          name="lastName"
          label="Last Name"
          id="lastName"
          type="text"
          required
        />
        <Input
          name="username"
          label="Username"
          id="username"
          type="text"
          required
        />
        <Input name="email" label="Email" id="email" type="email" required />
        <Input
          name="password"
          label="Password"
          id="password"
          type="password"
          required
        />
        <Input
          name="confirmPassword"
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          required
        />
        <Button
          className="clickable"
          type="submit"
          label="Sign up"
          title="sign up"
          icon="Register"
          primary
        />
        <p className="link-paragraph">
          Already have an account?
          <Link
            to={ROUTES.LOGIN}
            className="inline-link | primary | link | clickable"
          >
            Login
          </Link>
        </p>
      </Form>
    </Formik>
  );
}
