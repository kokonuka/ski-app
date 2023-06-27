import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { theme } from "@/components/thema";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
        authorizationParams={{
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
          audience: process.env.NEXT_PUBLIC_AUDIENCE!,
          // scope: "read:current_user update:current_user_metadata",
        }}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </ChakraProvider>
  );
}
