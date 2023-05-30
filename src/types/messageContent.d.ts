type MessageContentType = {
  id: string;
  message?: string;
  sender: string | number;
  files?: string[] | any;
  createdAt: Date;
  chatTitle: string;
  read?: boolean;
  voiceNote?: string;
  conversationId: string;
};

export default MessageContentType;
