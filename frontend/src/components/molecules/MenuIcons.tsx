import React from "react";
import { Box } from "@chakra-ui/react";
import {
  BsSearch,
  BsFillChatSquareDotsFill,
  BsFillBellFill,
} from "react-icons/bs";
import { LinkIcon } from "../atoms/LinkIcon";

type Props = {};

export const MenuIcons: React.FC<Props> = () => {
  return (
    <Box fontSize="xl" display="flex" alignItems="center" gap="7">
      <LinkIcon icon={<BsSearch />} href="#" />
      <LinkIcon icon={<BsFillChatSquareDotsFill />} href="#" />
      <LinkIcon icon={<BsFillBellFill />} href="#" />
    </Box>
  );
};
