import React from "react";
import { Header } from "../organisms/header/Header";
import { Footer } from "../organisms/Footer";
import { Box, Container } from "@chakra-ui/react";
import { ProfileHeader } from "../organisms/users/ProfileHeader";
import { ProfileTab } from "../organisms/users/ProfileTab";

export const ProfileLayout = () => {
  return (
    <Box minH="100vh" display="grid" gridTemplateRows="auto 1fr auto">
      <Header />
      <Container as="main" maxW="6xl" pt="10" pb="10">
        <ProfileHeader />
        <ProfileTab />
      </Container>
      <Footer />
    </Box>
  );
};
