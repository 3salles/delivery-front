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
  Text,
} from "@chakra-ui/react";

import {BsCartPlusFill} from 'react-icons/bs'
import { Category, Product } from "../../../models";

interface ProductCartProps {
  product: Product;
  category: Category;
}

export function ProductCart({product, category}: ProductCartProps ) {
  return (
    <WrapItem>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg="white"
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={product?.imageURL}
            alt={`Imagem ${product?.name}`}
            roundedTop="lg"
            h={300}
            w={300}
            objectFit="cover"
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                {category}
              </Badge>
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Text
                fontSize="xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                maxW={300}
                isTruncated
              >
                {product?.name}
              </Text>
              <Box
                fontSize="xl"
                color="gray.800"
              >
                <Box as="span" color={"gray.600"} fontSize="lg">
                  R$
                </Box>
                {product?.price?.toFixed(2)}
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
