import { Box } from "@chakra-ui/react";
import React from "react";
import { Spinner } from "../atoms/Spinner";

type Props = {};

export const SpinnerBox: React.FC<Props> = () => {
  return (
    <Box mt="24" display="flex" justifyContent="center">
      <Spinner />
    </Box>
  );
};
