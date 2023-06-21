import React from "react";
import { Avatar, Box, Container } from "@chakra-ui/react";
import { MenuIcons } from "../molecules/MenuIcons";
import { MenuAvatar } from "./MenuAvatar";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <Box as="header" borderBottom="1px" borderColor="gray.100" shadow="sm">
      <Container
        maxW="6xl"
        py="3"
        display="flex"
        justifyContent="space-between"
      >
        <a href="/">ロゴ</a>
        <Box display="flex" justifyContent="space-between" gap="5">
          <MenuIcons />
          <MenuAvatar />
        </Box>
      </Container>
    </Box>
  );
};
