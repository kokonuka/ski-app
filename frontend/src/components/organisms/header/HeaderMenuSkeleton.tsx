import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

type Props = {};

export const HeaderMenuSkeleton: React.FC<Props> = () => {
  return (
    <Box display="flex" alignItems="center" gap="7">
      <Box display="flex" gap="7">
        <SkeletonCircle size="5" />
        <SkeletonCircle size="5" />
        <SkeletonCircle size="5" />
      </Box>
      <Box>
        <SkeletonCircle size="10" />
      </Box>
    </Box>
  );
};
