type MessageType = {
  id: number;
  messageTitle: string;
  value: string;
  avatar: string;
  sentDate: Date;
  receivedDate: Date;
  lastMessage: string;
  label?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  pinned?: boolean;
  unread: boolean;
  visible: boolean;
  starred: boolean;
};
export default MessageType;
