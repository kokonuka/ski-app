import React from "react";
import { Header } from "../organisms/header/Header";
import { Box } from "@chakra-ui/react";
import { RoomList } from "../organisms/messages/RoomList";
import { MessageDetail } from "../organisms/messages/MessageDetail";

export const MessageLayout = () => {
  return (
    <Box minH="100vh" display="grid" gridTemplateRows="auto 1fr auto">
      <Header />
      <Box h="calc(100vh - 73px)" display="flex">
        <Box as="aside" w="30%">
          <RoomList />
        </Box>
        <Box as="main" w="70%">
          <MessageDetail />
        </Box>
      </Box>
    </Box>
  );
};
