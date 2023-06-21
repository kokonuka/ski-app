import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import { AvatarButton } from "../atoms/AvatarButton";
import { LinkButton } from "../atoms/LinkButton";
import { AvatarProfile } from "../molecules/AvatarProfile";

type Props = {};

export const MenuAvatar: React.FC<Props> = () => {
  return (
    <Menu>
      <MenuButton
        as={AvatarButton}
        src="https://bit.ly/dan-abramov"
        name="Dan Abrahmov"
      />
      <MenuList>
        <MenuItem as="a" href="#">
          <AvatarProfile showName={true} />
        </MenuItem>
        <Box py="3" px="3" display="flex" justifyContent="center">
          <LinkButton text="プロフィールを編集" />
        </Box>
        <MenuDivider />
        <MenuItem fontSize="sm">設定</MenuItem>
        <MenuItem fontSize="sm">ログアウト</MenuItem>
      </MenuList>
    </Menu>
  );
};
