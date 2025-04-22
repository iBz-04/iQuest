import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import cx from "@/utils/cx";
import { Message as MessageProps } from "ai/react";
import UpstashLogo from "@/components/upstash-logo";
import { IconUser, IconThumbUp, IconThumbDown, IconShare, IconBookmark } from "@tabler/icons-react";

const Message: React.FC<MessageProps> = ({ content, role }) => {
  const isUser = role === "user";
  const [saved, setSaved] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  return (
    <article
      className={cx(
        "mb-4 flex flex-col gap-2",
      )}
    >
      <div className={cx(
        "flex items-start gap-4 p-4 md:p-5 rounded-2xl",
        isUser ? "message-user" : "message-bot",
      )}>
        <Avatar isUser={isUser} />
        <Markdown
          className={cx(
            "py-1.5 md:py-1 space-y-4",
            isUser ? "font-semibold" : "",
          )}
          options={{
            overrides: {
              ol: ({ children }) => <ol className="list-decimal pl-5">{children}</ol>,
              ul: ({ children }) => <ol className="list-disc pl-5">{children}</ol>,
              a: ({ children, ...props }) => <a {...props} className="text-gray-300 underline hover:text-gray-100">{children}</a>
            },
          }}
        >
          {content}
        </Markdown>
      </div>

      {!isUser && (
        <div className="flex items-center justify-end gap-1 pr-4">
          <button 
            className={cx("feedback-button", feedback === 'up' && 'text-green-400')} 
            onClick={() => setFeedback('up')}
            title="Helpful"
          >
            <IconThumbUp size={16} />
          </button>
          <button 
            className={cx("feedback-button", feedback === 'down' && 'text-red-400')} 
            onClick={() => setFeedback('down')}
            title="Not helpful"
          >
            <IconThumbDown size={16} />
          </button>
          <button 
            className={cx("feedback-button", saved && 'text-yellow-400')} 
            onClick={() => setSaved(!saved)}
            title={saved ? "Unsave" : "Save"}
          >
            <IconBookmark size={16} />
          </button>
          <button 
            className="feedback-button" 
            title="Share"
          >
            <IconShare size={16} />
          </button>
        </div>
      )}
    </article>
  );
};

const Avatar: React.FC<{ isUser?: boolean; className?: string }> = ({
  isUser = false,
  className,
}) => {
  return (
    <div
      className={cx(
        "flex items-center justify-center size-8 shrink-0 rounded-full",
        isUser ? "bg-black text-gray-300" : "bg-black border border-zinc-800",
        className,
      )}
    >
      {isUser ? <IconUser size={20} /> : <UpstashLogo />}
    </div>
  );
};

export default Message;
export { Avatar };
