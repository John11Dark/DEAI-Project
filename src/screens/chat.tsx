import { Container, MessagesList, ChatForm, ChatInfo } from "../Components";
import { useAuth } from "../hooks";
import { MessageType } from "../types/messageType";
const data: MessageType[] = [];
export default function Chat() {
  const { user } = useAuth();
  return (
    <Container className="dashboard-content | chat-content | grid">
      <MessagesList messages={data} />
      <ChatForm></ChatForm>

      <ChatInfo></ChatInfo>
    </Container>
  );
}
