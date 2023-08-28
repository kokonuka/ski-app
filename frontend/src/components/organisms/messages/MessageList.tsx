import React, { useState, useEffect } from "react";
import { MessageItem } from "./MessageItem";
import { Message } from "@/types/message";
import axios from "axios";

type Props = {};

export const MessageList: React.FC<Props> = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const roomId = "room-1";
        const res = await axios.get(`http://localhost:3001/messages/${roomId}`);
        setMessages(res.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {messages.map((message, i) => (
        <MessageItem message={message} key={i} />
      ))}
    </>
  );
};
