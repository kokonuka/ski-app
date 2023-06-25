import React from "react";
import NextLink from "next/link";
import { Avatar, Box, Text, Link } from "@chakra-ui/react";

<NextLink href="/home" passHref>
  <Link>Home</Link>
</NextLink>;

export const RoomItem = () => {
  return (
    <Link as={NextLink} href="/messages/1" _hover={{}}>
      <Box
        p="3"
        display="flex"
        gap="2"
        cursor="pointer"
        _hover={{ backgroundColor: "blackAlpha.50" }}
      >
        <Box>
          <Avatar src="https://bit.ly/dan-abramov" name="Dan Abrahmov" />
        </Box>
        <Box>
          <Text>ニックネーム</Text>
          <Text mt="1" color="gray.500" fontSize="sm">
            ◯◯さん、はじめまして！
          </Text>
        </Box>
      </Box>
    </Link>
  );
};
