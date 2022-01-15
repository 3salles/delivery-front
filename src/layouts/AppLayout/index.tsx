import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../../components/common/Header";

export function AppLayout ({children}: {children: ReactNode}) {
  return (
    <Box w='100%' bgGradient='linear(to-b,   #02AAB0, #00CDAC)'>
      <Header />
      <Box px="8" py="4" >
        {children}
      </Box>
    </Box>
  )
}