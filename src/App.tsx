import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { CustomRoutes } from "./routes";
import { CartProvider } from "./hooks/useCart";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CartProvider>
      <CustomRoutes />
    </CartProvider>
  </ChakraProvider>
);
