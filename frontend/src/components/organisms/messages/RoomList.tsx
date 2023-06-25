import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { RoomItem } from "./RoomItem";

export const RoomList = () => {
  return (
    <>
      <Text mt="3" ml="3" fontWeight="medium" color="gray.700" fontSize="2xl">
        メッセージ
      </Text>
      <Box mt="5">
        <RoomItem />
        <RoomItem />
      </Box>
    </>
  );
};
