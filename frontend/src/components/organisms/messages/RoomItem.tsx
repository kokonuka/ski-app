import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { Avatar, Box, Text, Link } from "@chakra-ui/react";
import { Room } from "@/types/room";
import axios from "axios";
import { User } from "@/types/user";

type Props = {
  room: Room;
};

export const RoomItem = ({ room }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const id = "user-1";
        const receiverId =
          room.creatorId === id ? room.memberId : room.creatorId;
        const res = await axios.get(
          `http://localhost:3001/users/${receiverId}`
        );
        setUser(res.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [room.creatorId, room.memberId]);

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
          <Text>{user?.name}</Text>
          <Text mt="1" color="gray.500" fontSize="sm">
            ◯◯さん、はじめまして！
          </Text>
        </Box>
      </Box>
    </Link>
  );
};
