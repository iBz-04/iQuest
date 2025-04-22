import React from "react";
import Markdown from "markdown-to-jsx";
import cx from "@/utils/cx";
import { Message as MessageProps } from "ai/react";
import Image from 'next/image';
import { IconUser } from "@tabler/icons-react";

const Message: React.FC<MessageProps> = ({ content, role }) => {
  const isUser = role === "user";

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

      {/* Removing feedback buttons as requested */}
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
        "flex items-center justify-center size-8 shrink-0 rounded-full overflow-hidden",
        isUser ? "bg-black text-gray-300" : "bg-black border border-zinc-800",
        className,
      )}
    >
      {isUser ? (
        <IconUser size={20} />
      ) : (
        <Image 
          src="/ele.png" 
          alt="iQuest logo" 
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      )}
    </div>
  );
};

export default Message;
export { Avatar };
