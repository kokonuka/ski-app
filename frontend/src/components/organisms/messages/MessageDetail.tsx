import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Button } from "@chakra-ui/react";
import { MessageList } from "./MessageList";
import { MessageForm } from "./MessageForm";

type Props = {};

export const MessageDetail: React.FC<Props> = () => {
  const [isId, setIsId] = useState(false);
  const [isContracted, setIsContracted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) setIsId(true);
  }, [router]);

  const handleClick = () => {
    setIsContracted(true);
  };

  if (!isId) return <Box bg="blackAlpha.100" h="100%" w="100%"></Box>;

  if (!isContracted)
    return (
      <Box h="100%" w="100%" position="relative">
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          display="flex"
          flexDirection="column"
        >
          <Box pb="10" flex="1">
            <MessageList />
          </Box>
          <Box>
            <MessageForm />
          </Box>
        </Box>
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          backgroundColor="rgba(0,0,0,.6)"
          backdropFilter="blur(1px)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            h="auto"
            py="5"
            bg="blue.400"
            color="white"
            _hover={{ backgroundColor: "blue.300" }}
            onClick={handleClick}
          >
            プランへの加入が必要です
          </Button>
        </Box>
      </Box>
    );

  return (
    <Box h="100%" display="flex" flexDirection="column">
      <Box pb="10" flex="1" overflowY="scroll">
        <MessageList />
      </Box>
      <Box>
        <MessageForm />
      </Box>
    </Box>
  );
};
