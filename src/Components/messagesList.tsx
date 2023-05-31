import { useRef } from "react";
import Search from "./forms/search";
import MessageCard from "./messageCard";
import IconLabelButton from "./utils/iconLabelButton";
import { MessageType } from "../types/messageType";
import IllustrationImageElement from "./notify/illustrationImageElement";

type MessagesListProps = {
  className?: string;
  messages: MessageType[];
};
export default function MessagesList({
  className,
  messages,
}: MessagesListProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <section className={`messages-list-container | ${className}`}>
      <div className="messages-list-header">
        <Search
          placeholder="Search"
          data={messages.map((message) => ({
            id: message.id,
            name: message.messageTitle,
            value: message.lastMessage,
            visible: message.visible,
          }))}
          searchQueryRef={searchRef}
          filter
          className="messages-list-search"
        />
        <div className="messages-list-header-buttons | flex">
          <IconLabelButton icon="Mail" title="unread messages" label="unread" />
          <IconLabelButton icon="Star" title="Follow up" label="Follow up" />
          <IconLabelButton icon="Label" title="Labels" label="Labels" />
          <IconLabelButton icon="Filter" title="Filter" label="Filter" />
        </div>
      </div>
      {messages.length > 0 ? (
        <div className="messages-container | center | grid">
          {messages.map((message) => (
            <MessageCard data={message} className="any" />
          ))}
          <IllustrationImageElement
            imgSrc="/no-more-messages.png"
            message={"No more Messages to load"}
          />
        </div>
      ) : (
        <IllustrationImageElement
          imgSrc="/no-more-messages.png"
          message={"No Messages to load yet"}
        />
      )}
    </section>
  );
}
