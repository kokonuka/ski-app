import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {};

export const AuthButtons: React.FC<Props> = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleSignUp = () => {
    loginWithRedirect({
      appState: {
        returnTo: "/users/registration",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <Box display="flex" gap="2">
      <Button
        h="auto"
        py="2"
        px="3"
        bg="blue.400"
        color="white"
        fontSize="sm"
        _hover={{ backgroundColor: "blue.300" }}
        onClick={handleSignUp}
      >
        登録
      </Button>
      <Button
        h="auto"
        py="2"
        px="3"
        bg="blue.400"
        color="white"
        fontSize="sm"
        _hover={{ backgroundColor: "blue.300" }}
        onClick={handleLogin}
      >
        ログイン
      </Button>
    </Box>
  );
};
