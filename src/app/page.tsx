"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Message as MessageProps, useChat } from "ai/react";
import Form from "@/components/form";
import Message from "@/components/message";
import cx from "@/utils/cx";
import PoweredBy from "@/components/powered-by";
import MessageLoading from "@/components/message-loading";
import { INITIAL_QUESTIONS } from "@/utils/const";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [streaming, setStreaming] = useState<boolean>(false);

  const { messages, input, handleInputChange, handleSubmit, setInput } =
    useChat({
      api: "/api/guru",
      initialMessages: [
        {
          id: "0",
          role: "system",
          content: `**Welcome to iQuest**

Your companion for exploring Scholars4Dev, the platform for finding international scholarships.`,
        },
      ],
      onResponse: () => {
        setStreaming(false);
      },
    });

  const onClickQuestion = (value: string) => {
    setInput(value);
    setTimeout(() => {
      formRef.current?.dispatchEvent(
        new Event("submit", {
          cancelable: true,
          bubbles: true,
        }),
      );
    }, 1);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(e);
      setStreaming(true);
    },
    [handleSubmit],
  );

  return (
    <main className="relative max-w-screen-md p-4 md:p-6 mx-auto flex min-h-svh !pb-32 md:!pb-40 overflow-y-auto">
      <div className="absolute top-0 left-0 right-0 z-[-1] h-64 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>

      <div className="w-full">
        {/* Welcome message */}
        {messages.length === 1 && (
          <div className="mt-5 mb-8 text-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">Find Your Perfect Scholarship</h1>
            <p className="text-gray-400 max-w-md mx-auto">Explore international scholarship opportunities from Scholars4Dev</p>
          </div>
        )}
        
        {messages.map((message: MessageProps) => {
          return <Message key={message.id} {...message} />;
        })}

        {/* loading */}
        {streaming && <MessageLoading />}

        {/* initial question */}
        {messages.length === 1 && (
          <div className="mt-5 md:mt-7 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <h2 className="col-span-full text-sm font-medium text-gray-400 mb-1">Try asking about:</h2>
            {INITIAL_QUESTIONS.map((message) => {
              return (
                <button
                  key={message.content}
                  type="button"
                  className="cursor-pointer select-none text-left glass-card font-normal
                  p-3 md:px-4 md:py-3 hover:bg-gray-800/80 hover:border-gray-700
                  transition-all duration-200"
                  onClick={() => onClickQuestion(message.content)}
                >
                  {message.content}
                </button>
              );
            })}
            
            <div className="col-span-full mt-8">
              <h2 className="text-sm font-medium text-gray-400 mb-3">Popular topics:</h2>
              <div className="flex flex-wrap gap-2">
                {["PhD Scholarships", "Europe", "USA", "Australia", "Engineering", "Medical", "Full-Funded", "Women", "Summer 2025"].map(tag => (
                  <button 
                    key={tag}
                    className="px-3 py-1.5 text-sm bg-black hover:bg-zinc-900 text-gray-300 rounded-full border border-zinc-800 transition-colors"
                    onClick={() => onClickQuestion(`Tell me about ${tag} scholarships`)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* bottom ref */}
        <div ref={messagesEndRef} />
      </div>

      <div
        className={cx(
          "fixed z-10 bottom-0 inset-x-0",
          "flex justify-center items-center",
          "bg-black/80 backdrop-blur-md",
        )}
      >
        <span
          className="absolute bottom-full h-20 inset-x-0 from-transparent
         bg-gradient-to-b to-black pointer-events-none"
        />

        <div className="w-full max-w-screen-md px-4 md:px-5 py-5">
          <Form
            ref={formRef}
            onSubmit={onSubmit}
            inputProps={{
              disabled: streaming,
              value: input,
              onChange: handleInputChange,
            }}
            buttonProps={{
              disabled: streaming,
            }}
          />

          {messages.length > 1 && (
            <div className="mt-4 flex justify-center">
              <button 
                className="px-3 py-1.5 text-sm bg-black hover:bg-zinc-900 text-gray-400 rounded-full border border-zinc-800 transition-colors"
                onClick={() => window.location.reload()}
              >
                Start new chat
              </button>
            </div>
          )}
          
          <div className="mt-3">
            <PoweredBy />
          </div>
        </div>
      </div>
    </main>
  );
}
