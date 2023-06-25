import React from "react";
import { Box } from "@chakra-ui/react";
import { AvatarProfile } from "../../molecules/AvatarProfile";

type Props = {};

export const ProfileHeader: React.FC<Props> = () => {
  return (
    <Box>
      <AvatarProfile showName={true} />
    </Box>
  );
};
