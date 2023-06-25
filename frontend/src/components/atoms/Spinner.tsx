import React from "react";
import { Spinner as ChakraSpinner } from "@chakra-ui/react";

type Props = {};

export const Spinner: React.FC<Props> = () => {
  return (
    <ChakraSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};
