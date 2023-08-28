import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { Room } from "@/types/room";
import { RoomItem } from "./RoomItem";

export const RoomList = () => {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const id = "user-1";
        const res = await axios.get(`http://localhost:3001/rooms/${id}`);
        setRooms(res.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Text mt="3" ml="3" fontWeight="medium" color="gray.700" fontSize="2xl">
        メッセージ
      </Text>
      <Box mt="5">
        {rooms.map((room, i) => (
          <RoomItem key={i} room={room} />
        ))}
      </Box>
    </>
  );
};
