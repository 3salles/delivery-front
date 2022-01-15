import  React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { CustomRoutes } from "./routes"

export const App = () => (
  <ChakraProvider theme={theme}>
    <CustomRoutes />
  </ChakraProvider>
)
