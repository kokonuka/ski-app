import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: React.ReactElement<IconType>;
  text: string;
};

export const IconButton: React.FC<Props> = ({ icon, text }) => {
  return (
    <Button bg="inherit" fontSize="sm" color="blackAlpha.800">
      <Box fontSize="lg" mt="1" mr="2">
        {icon}
      </Box>
      {text}
    </Button>
  );
};
