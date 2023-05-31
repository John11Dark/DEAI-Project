import { Form, Formik } from "formik";
// import { useForm, Controller } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";

import Icon from "../../utils/icon";
import Input from "../input";
import * as Yup from "yup";
import IconButton from "../../utils/iconButton";
import Button from "../../utils/button";
import { useAuth } from "../../../hooks";
import colors from "../../../styles/colors";
import { MessageContentType } from "../../../types/messageContent";
import MessageContentCard from "../../messageBody";
// import { Socket } from "../../../api";
type ChatFormProps = {
  className?: string;
};

export default function ChatForm({ className }: ChatFormProps) {
  const validationSchema = Yup.object({
    message: Yup.string().required("Message can not be empty"),
  });

  const initialValues = {
    message: "",
  };

  const [conversationTitle, setConversationTitle] = useState("New Chat");
  const [conversationId, setConversationId] = useState(
    `conversation-id-${Math.random()}-${Date.now()}`
  );
  function handleConversationTitle(e: any) {
    setConversationTitle(e.target.value);
  }
  const { user } = useAuth();
  const [message, setMessage] = useState<MessageContentType>();
  const setRef = useCallback((node: any) => {
    if (node) node.scrollIntoView({ smooth: true });
  }, []);
  const [messages, setMessages] = useState<MessageContentType[]>([]);

  const handleSubmit = (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    setMessage({
      id: `message-id-${Math.random()}-${Date.now()}`,
      message: values.message,
      sender: user.id,
      createdAt: new Date(),
      chatTitle: conversationTitle,
      read: true,
      conversationId: "1",
    });

    resetForm();
  };
  const handleIncomingMessage = (data: MessageContentType) => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  // useEffect(() => {
  //   if (!Socket.socket) return;
  //   Socket.listener<MessageContentType>(
  //     "incoming-message",
  //     handleIncomingMessage
  //   );

  //   return () => {
  //     Socket.removeListener<MessageContentType>(
  //       "incoming-message",
  //       handleIncomingMessage
  //     );
  //   };
  // }, [Socket.socket]);

  useEffect(() => {
    if (message) {
      if (messages.length > 0 && message.id !== messages[-1]?.id)
        setMessages((prevMessages) => [...prevMessages, message]);
      else {
        setMessages([message]);
        // if (Socket.socket) Socket.emit("send-message", message);
      }
    }
  }, [message]);

  return (
    <section className={`chat-form-container | grid | ${className}`}>
      <div className="chat-header | flex">
        <div className="flex | center | gap-300">
          <img src="./icon.png" alt="" className="chat-avatar" />
          <div className="chat-header-info">
            <h2 className="chat-title">New Chat</h2>
            <Button
              label="Assign to"
              type="button"
              title="Assign conversation to another user"
              className="chat-assign-button"
            />
          </div>
        </div>
        <Icon
          className="chat-options | clickable"
          type="button"
          name={"EllipsisVertical"}
          size={30}
        />
      </div>
      <div className="chat-body-container">
        {messages.map((message: MessageContentType) => (
          <MessageContentCard
            key={message.id}
            currentUser={user}
            data={message}
            ref={setRef}
          />
        ))}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="chat-form | flex">
          <div className="chat-input-container | grid | center">
            <Icon
              className="microphone | clickable"
              type="button"
              name={"Microphone"}
              fill={colors.dark}
            />
            <Input
              type="text"
              placeholder="Type a message"
              className="chat-input"
              name="message"
              id="message"
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
