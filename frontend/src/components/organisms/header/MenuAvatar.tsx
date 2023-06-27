import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { AvatarButton } from "../../atoms/AvatarButton";
import { LinkButton } from "../../atoms/LinkButton";
import { AvatarProfile } from "../../molecules/AvatarProfile";

type Props = {};

export const MenuAvatar: React.FC<Props> = () => {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <Menu>
      <MenuButton as={AvatarButton} src={user?.picture} name={user?.name} />
      <MenuList>
        <MenuItem as="a" href="/users/userId/profile">
          <AvatarProfile user={user!} showName={true} />
        </MenuItem>
        <Box py="3" px="3" display="flex" justifyContent="center">
          <LinkButton text="プロフィールを編集" />
        </Box>
        <MenuDivider />
        <MenuItem fontSize="sm">設定</MenuItem>
        <MenuItem fontSize="sm" onClick={handleLogout}>
          ログアウト
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
