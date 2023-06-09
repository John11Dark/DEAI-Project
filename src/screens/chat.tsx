import { useEffect } from "react";
import { Container, MessagesList, ChatForm, ChatInfo } from "../Components";
import { useAuth } from "../hooks";
import { MessageType } from "../types/messageType";
import { setupDocument } from "../utils";
import "../styles/dashboard.css";

const data: MessageType[] = [];
export default function Chat() {
  useEffect(() => {
    setupDocument({
      title: "Chat",
      singlePage: true,
    });
  }, []);
  const { user } = useAuth();
  return (
    <Container className="dashboard-content | chat-content | grid">
      <MessagesList messages={data} />
      <ChatForm></ChatForm>

      <ChatInfo></ChatInfo>
    </Container>
  );
}
