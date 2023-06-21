import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  showName: boolean;
};

export const AvatarProfile: React.FC<Props> = ({ showName }) => {
  return (
    <Box display="flex" gap="3">
      <Avatar src="https://bit.ly/dan-abramov" name="Dan Abrahmov" size="lg" />
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Text fontWeight="medium">ニックネーム</Text>
        {showName && (
          <Text mt="1" color="gray.600" fontSize="xs">
            名前
          </Text>
        )}
      </Box>
    </Box>
  );
};
