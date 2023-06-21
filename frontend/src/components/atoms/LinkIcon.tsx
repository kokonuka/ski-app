import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  icon: React.ReactElement<IconType>;
  href: string;
};

export const LinkIcon: React.FC<Props> = ({ icon, href }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      color="blackAlpha.500"
      _hover={{
        color: "blackAlpha.700",
      }}
    >
      {icon}
    </Link>
  );
};
