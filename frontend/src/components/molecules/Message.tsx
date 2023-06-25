import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  isPartner: boolean;
};

export const Message: React.FC<Props> = ({ isPartner }) => {
  return (
    <>
      <Box display="flex" justifyContent={isPartner ? "" : "flex-end"}>
        <Text
          mt="2"
          p="2"
          maxW="70%"
          bg={isPartner ? "blackAlpha.100" : "blue.400"}
          color={isPartner ? "" : "white"}
          fontSize="sm"
          borderRadius={isPartner ? "0 10px 10px 10px" : "10px 0 10px 10px"}
        >
          メッセージ
        </Text>
      </Box>
      <Text
        mt="2"
        px="2"
        color="gray.500"
        fontSize="xs"
        textAlign={isPartner ? "left" : "right"}
      >
        2023/06/24
      </Text>
    </>
  );
};
