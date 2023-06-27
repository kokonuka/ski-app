import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { MenuAvatar } from "./MenuAvatar";
import { MenuIcons } from "../../molecules/MenuIcons";
import { AuthButtons } from "./ AuthButtons";
import { HeaderMenuSkeleton } from "./HeaderMenuSkeleton";

type Props = {};

export const HeaderMenu: React.FC<Props> = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently, user } =
    useAuth0();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        return accessToken;
      } catch (e: any) {
        console.log(e.message);
      }
      getAccessToken();
    };
  }, [getAccessTokenSilently, user?.sub]);

  if (isLoading) return <HeaderMenuSkeleton />;

  if (!isAuthenticated) return <AuthButtons />;

  return (
    <Box display="flex" justifyContent="space-between" gap="7">
      <MenuIcons />
      <MenuAvatar />
    </Box>
  );
};
