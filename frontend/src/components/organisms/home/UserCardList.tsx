import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { UserCard } from "./UserCard";
import { User } from "@/types/user";

type Props = {};

export const UserCardList: React.FC<Props> = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:3001/users");
        setUsers(res.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Box>
      <SimpleGrid columns={4} spacing={5} minChildWidth="300px">
        {users.map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
