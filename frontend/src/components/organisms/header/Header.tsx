import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { HeaderMenu } from "./HeaderMenu";

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
        <HeaderMenu />
      </Container>
    </Box>
  );
};
