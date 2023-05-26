import { Formik, Form } from "formik";
import * as Yup from "yup";
import Icon from "../../utils/icon";
import Input from "../input";
import Select from "../select";
import TextArea from "../textArea";
import CountryCodeSelect from "../countryCodeSelect";

export default function ResetPassword() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address"),
    countryCode: Yup.string().matches(/^\d{3}$/, "Invalid country code"),
    phoneNumber: Yup.string().matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid phone number"
    ),
    username: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
  });

  const initialValues = {
    email: "",
    phoneNumber: "",
    username: "",
    countryCode: countryCodeOptions[0],
  };

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="contact-form">
        <Input name="firstName" label="First Name" id="firstName" type="text" />
        <CountryCodeSelect
          name="countryCode"
          label="Country Code"
          id="countryCode"
          title="country Code"
        />
        <Input name="email" label="Email" id="email" type="email" />
        <TextArea id="message" name="message" label="Message" />
        <Icon className="clickable" type="submit" name={"PaperPlane"} />
      </Form>
    </Formik>
  );
}
