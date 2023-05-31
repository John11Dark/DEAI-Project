import Label from "./utils/label";
import Icon from "./utils/icon";
import { MessageType } from "../types/messageType";
type messageCardProps = {
  className?: string;
  data: MessageType;
};
export default function MessageCard({ className, data }: messageCardProps) {
  return (
    <div
      className={`message-card-container | flex | relative | clickable | ${className} | ${
        data.unread ? "unread" : ""
      } | ${data.visible ? "" : "hidden"}`}
    >
      <img
        className="message-card-avatar"
        src="https://picsum.photos/200/300"
        alt={`${data.messageTitle} profile picture`}
      />
      <article className="message-card-info">
        <h3 className="message-card-info-title">{data.messageTitle}</h3>
        <p className="message-card-info-message">{data.lastMessage}</p>
      </article>
      <div className="flex | utils-icons | center">
        {data.label && <Label type={data.label} onMouseOver={(e) => {}} />}
        {data.starred && (
          <Icon name="Star" fill="var(--primary-color-50)" size={18} />
        )}
        {data.pinned && (
          <Icon
            name="Pin"
            fill="var(--primary-color-50)"
            className="pinned-icon"
            size={18}
          />
        )}
      </div>
      {/* <span className="message-card-info-date">
        {getStringDate(data.sentDate)}
      </span> */}
    </div>
  );
}
