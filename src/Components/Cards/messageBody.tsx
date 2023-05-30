import { forwardRef } from "react";
import { MessageContentType } from "../../types";
import DateFormatter from "../../utils/Date";

const { formatCreatedDate } = DateFormatter();

type MessageProps = {
  data: MessageContentType;
  className?: string;
  currentUser: any;
};
const MessageContentCard = forwardRef(
  ({ data, className, currentUser }: MessageProps, ref?: any) => {
    return (
      <div
        ref={ref}
        className={`message-body | relative | flex | ${className}`}
        data-attr={data.sender === currentUser?.id ? "sender" : "receiver"}
      >
        <img src="/icon.png" alt="" className="message-avatar-image" />
        <p className="message-time">{formatCreatedDate(data.createdAt)}</p>
        <p className="message-content">{data.message}</p>
      </div>
    );
  }
);

export default MessageContentCard;
