import React from "react";
import { Box, Button, Divider, Text } from "@chakra-ui/react";

type Props = {};

export const Profile: React.FC<Props> = () => {
  return (
    <Box display="grid" gridTemplateColumns="auto 1fr" gridGap="30px 30px">
      <Text fontWeight="medium">基本情報</Text>
      <Box>フォーム</Box>
      <Divider gridColumn="1 / span 2" />
      <Text fontWeight="medium">スキープロフィール</Text>
      <Box>フォーム</Box>
      <Box gridColumn="1 / span 2" display="flex" justifyContent="center">
        <Button
          bg="blue.500"
          color="white"
          fontSize="sm"
          px="5"
          _hover={{ backgroundColor: "blue.600" }}
        >
          変更を保存
        </Button>
      </Box>
    </Box>
  );
};
