import React from "react";
import cx from "@/utils/cx";
import { Avatar } from "@/components/message";

const MessageLoading: React.FC = () => {
  return (
    <article
      className={cx(
        "mb-2 flex items-center gap-4 p-4 md:p-5 rounded-2xl",
        "message-bot",
      )}
    >
      <Avatar />

      <div className="flex gap-1 items-center">
        <div className="typing-dot" style={{ animationDelay: "0ms" }}></div>
        <div className="typing-dot" style={{ animationDelay: "300ms" }}></div>
        <div className="typing-dot" style={{ animationDelay: "600ms" }}></div>
      </div>
    </article>
  );
};

export default MessageLoading;
