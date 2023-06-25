import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { Message } from "@/components/molecules/Message";

type Props = {
  isPartner: boolean;
};

export const MessageItem: React.FC<Props> = ({ isPartner }) => {
  return (
    <Box pt="8" px="5" display="flex" gap="3">
      {isPartner && (
        <Avatar
          src="https://bit.ly/dan-abramov"
          name="Dan Abrahmov"
          size="sm"
        />
      )}
      <Box flex="1">
        {isPartner && <Text fontSize="sm">ニックネーム</Text>}
        <Message isPartner={isPartner} />
      </Box>
    </Box>
  );
};
