import {
  Flex,
  Box,
  Image,
  Badge,
  WrapItem,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";

import { BsCartPlusFill } from "react-icons/bs";
import { categoryColor } from "../../../helpers/categoryColor";
import { useCart } from "../../../hooks/useCart";
import { Category, Product } from "../../../models";

interface ProductCartProps {
  product: Product;
  category: Category;
}

interface CartItemsAmount {
  [key: number]: number;
}

export function ProductCart({ product, category }: ProductCartProps) {
  const { addOrder, orders } = useCart();

  const cartItemsAmount = orders.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product?.id] = product?.amount!;

    return newSumAmount;
  }, {} as CartItemsAmount);

  return (
    <WrapItem>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg="white"
          maxW={300}
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
              <Badge
                rounded="full"
                px="2"
                fontSize="0.8em"
                colorScheme={categoryColor(category)}
              >
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
              <Text fontSize="xl" color="gray.800">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product?.price)}
              </Text>
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
              onClick={() => addOrder(product?.id, category)}
            >
              <Button
                rightIcon={<BsCartPlusFill />}
                con={<BsCartPlusFill />}
                variant="solid"
                color="white"
                bg="#02AAB0"
                _hover={{ opacity: 0.8 }}
                borderTop="lg"
              >
                {cartItemsAmount[product.id] || 0}
              </Button>

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
