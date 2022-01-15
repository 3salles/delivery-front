import { Box,  Flex, Heading, HStack, Text } from "@chakra-ui/react";
import {BsBasketFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

export function Header() {

  return (
    <Box color="white" bg="#02AAB0" p="8">
        <Heading>
          <Flex justify='space-between'>
            <Text>Market SD</Text>
            <Link to='/cart'>
            <HStack spacing='6'  _hover={{opacity: 0.8}}>
              <Box>
              <Text fontSize='lg'>Meu carrinho</Text>
              <Text fontSize='lg'>2 itens</Text>
              </Box>
              <BsBasketFill />
            </HStack>
            </Link>
          </Flex>
        </Heading>
      </Box>
  )
}