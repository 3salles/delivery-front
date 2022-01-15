import { Box, Flex, Heading, HStack, Text, Wrap } from "@chakra-ui/react";
import { ProductCart } from "../../components/common/ProductCard";
import { AppLayout } from "../../layouts/AppLayout";



export default function Home () {
  return (
    <AppLayout >
      <Wrap>
        <ProductCart />
      </Wrap>
    </AppLayout>
  )
}