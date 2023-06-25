import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { UserCard } from "./UserCard";

type Props = {};

export const UserCardList: React.FC<Props> = () => {
  return (
    <Box>
      <SimpleGrid columns={4} spacing={5} minChildWidth="300px">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </SimpleGrid>
    </Box>
  );
};
