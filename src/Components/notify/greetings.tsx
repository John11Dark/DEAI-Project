import React from "react";
import Emoji from "../utils/emoji";

type GreetingsProps = {
  username: string;
};

export default function Greetings({ username }: GreetingsProps) {
  return (
    <div>
      <h1>Good morning John</h1>
      <p>
        What are you up today? <Emoji content="smily" />
      </p>
    </div>
  );
}
