import React from "react";
import { Box, Button, Divider, Text } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const PanelFrame: React.FC<Props> = ({ children }) => {
  return (
    <Box mt="10" p="10" border="1px" borderRadius="base" borderColor="gray.200">
      {children}
    </Box>
  );
};
