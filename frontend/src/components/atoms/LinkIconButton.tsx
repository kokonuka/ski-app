import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  href: string;
  icon: React.ReactElement<IconType>;
  text: string;
};

export const LinkIconButton: React.FC<Props> = ({ href, icon, text }) => {
  return (
    <Button
      as="a"
      href={href}
      bg="inherit"
      fontSize="sm"
      color="blackAlpha.800"
    >
      <Box fontSize="xl" mr="2">
        {icon}
      </Box>
      <Text>{text}</Text>
    </Button>
  );
};
