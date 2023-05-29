import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../input";
import Button from "../../utils/button";
import Icon from "../../utils/icon";
import Select from "../select";
import TextArea from "../textArea";

export default function ContactForm() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  });

  type TopicOption = {
    index: number;
    value: string;
    option: string;
  };
  const topicOptions: TopicOption[] = [
    { index: 0, value: "topic", option: "Topic" },
    { index: 1, value: "topic1", option: "Topic 1" },
    { index: 2, value: "topic2", option: "Topic 2" },
    { index: 3, value: "topic3", option: "Topic 3" },
  ];
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
    topic: topicOptions[0],
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
        <Select
          name="topic"
          label="Topic"
          id="topic"
          options={topicOptions}
          title="Topic"
        />
        <Input name="email" label="Email" id="email" type="email" />
        <TextArea id="message" name="message" label="Message" />
        <Icon className="clickable" type="submit" name={"PaperPlane"} />
      </Form>
    </Formik>
  );
}
