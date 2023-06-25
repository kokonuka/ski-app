import React from "react";
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { Box, Container, Heading } from "@chakra-ui/react";
import { UserCardList } from "../organisms/home/UserCardList";
import { SearchForm } from "../organisms/SearchForm";

export const TopLayout = () => {
  return (
    <Box minH="100vh" display="grid" gridTemplateRows="auto 1fr auto">
      <Header />
      <Container as="main" maxW="6xl" pt="16" pb="36">
        <Box display="grid" gridTemplateColumns="auto 1fr" gridGap="20px 10px">
          <div></div>
          <Heading fontSize="2xl" fontWeight="medium" color="gray.700">
            おすすめのユーザー
          </Heading>
          <SearchForm></SearchForm>
          <UserCardList />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};
