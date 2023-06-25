import React from "react";
import { MessageItem } from "./MessageItem";

type Props = {};

export const MessageList: React.FC<Props> = () => {
  return (
    <>
      <MessageItem isPartner={true} />
      <MessageItem isPartner={false} />
      <MessageItem isPartner={true} />
      <MessageItem isPartner={true} />
      {/* <MessageItem isPartner={true} />
      <MessageItem isPartner={true} />
      <MessageItem isPartner={true} />
      <MessageItem isPartner={true} />
      <MessageItem isPartner={true} />
      <MessageItem isPartner={true} />
      <MessageItem isPartner={true} /> */}
    </>
  );
};
