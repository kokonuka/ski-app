import { Box, Button, Textarea } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
type Props = {};

export const MessageForm: React.FC<Props> = () => {
  const [value, setValue] = useState("");
  const [height, setHeight] = useState(24);
  const textareaRef = useRef(null);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleInputResize = (event: any) => {
    setHeight(event.target.scrollHeight);
  };

  return (
    <>
      <Box pb="8" px="5">
        <Box
          py="3"
          px="3"
          pr="10"
          bg="blackAlpha.100"
          border="1px"
          borderRadius="xl"
          borderColor="transparent"
          position="relative"
        >
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onInput={handleInputResize}
            placeholder="Send a message"
            bg="transparent"
            minH="24px"
            h={`${height}px`}
            p="0"
            fontSize="sm"
            border="none"
            lineHeight="1.5"
            resize="none"
            _focusVisible={{}}
          />
          <Button
            p="2"
            minW=""
            w="32px"
            h="32px"
            bg="blue.400"
            fontSize="sm"
            color="white"
            borderRadius="lg"
            position="absolute"
            right="2"
            bottom="2"
            _hover={{
              backgroundColor: "blue.300",
            }}
            isDisabled={value ? false : true}
          >
            <BsFillSendFill />
          </Button>
        </Box>
      </Box>
    </>
  );
};
