import { Form, Formik } from "formik";
import { useForm, Controller } from "react-hook-form";
import { useCallback } from "react";

import Icon from "../../utils/icon";
import Input from "../input";
import * as Yup from "yup";
import IconButton from "../../utils/iconButton";
import Button from "../../utils/button";
type ChatFormProps = {
  className?: string;
};

export default function ChatForm({ className }: ChatFormProps) {
  const validationSchema = Yup.object({
    message: Yup.string().required("Message can not be empty"),
    files: Yup.array(),
  });

  const initialValues = {
    message: "",
    files: [],
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
    <section className={`chat-form-container | ${className}`}>
      <div className="chat-header | flex | justify-between">
        <img src="/icon.png" alt="" width="100" height="100" />
        <div className="chat-header-info | flex | flex-col">
          <h2 className="chat-title">New Chat</h2>
          <Button
            label="Assign to"
            type="button"
            title="Assign conversation to another user"
          />
        </div>
        <Icon className="clickable" type="button" name={"EllipsisVertical"} />
      </div>
      <div className="chat-body"></div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="chat-form">
          <div className="chat-input-container | flex | justify-between">
            <Icon className="clickable" type="button" name={"Microphone"} />
            <Input
              name="message"
              placeholder="Ask me anything!"
              id="message"
              type="text"
              className="chat-input"
            />

            <Icon className="clickable" type="button" name={"Attachment"} />
          </div>
          <IconButton
            className=""
            type="submit"
            icon={"PaperPlane"}
            title="Send"
          />
        </Form>
      </Formik>
    </section>
  );
}
