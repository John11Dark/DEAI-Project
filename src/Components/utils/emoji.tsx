import React from "react";

type EmojiProps = {
  content: string;
};
export default function emoji({ content }: EmojiProps) {
  return <span>😀</span>;
}
