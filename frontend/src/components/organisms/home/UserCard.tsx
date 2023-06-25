import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Avatar,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { BsPersonFill, BsFillChatSquareDotsFill } from "react-icons/bs";
import { LinkIconButton } from "../../atoms/LinkIconButton";
import { IconButton } from "../../atoms/IconButton";
import { AvatarProfile } from "../../molecules/AvatarProfile";

type Props = {};

export const UserCard: React.FC<Props> = () => {
  return (
    <Card borderTop="8px" borderColor="cyan.500">
      <CardHeader>
        <AvatarProfile showName={false} />
      </CardHeader>

      <CardBody pt="5" pb="10">
        <Text color="gray.600" fontSize="sm">
          自己紹介文
        </Text>
      </CardBody>

      <Divider borderColor="gray.200" />

      <CardFooter display="flex" gap="2">
        <LinkIconButton href="#" text="プロフィール" icon={<BsPersonFill />} />
        <IconButton text="メッセージ" icon={<BsFillChatSquareDotsFill />} />
      </CardFooter>
    </Card>
  );
};
