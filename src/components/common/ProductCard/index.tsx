import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  WrapItem,
  Button,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

import {BsCartPlusFill} from 'react-icons/bs'

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1545334894-9c7a7ccefaf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
};

export function ProductCart() {
  return (
    <WrapItem>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            h={300}
            w={300}
            objectFit="cover"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                Bebidas
              </Badge>
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                Água
              </Box>
              <Box
                fontSize="2xl"
                color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  R$
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>
            <ButtonGroup
              mt="4"
              w="full"
              variant="solid"
              color="white"
              bg="#00CDAC"
              _hover={{ opacity: 0.8 }}
              isAttached
              rounded="lg"
            >
              <IconButton
                aria-label="Adicionar no carrinho"
                icon={<BsCartPlusFill />}
                variant="solid"
                color="white"
                bg='#02AAB0'
                _hover={{ opacity: 0.8 }}
                borderTop="lg"
              />
              <Button
                variant="solid"
                color="white"
                bg="#00CDAC"
                _hover={{ opacity: 0.8 }}
              >
                Adicionar ao carrinho
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Flex>
    </WrapItem>
  );
}
