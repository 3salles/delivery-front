import {
  Circle,
  Flex,
  HStack,
  Image,
  Input,
  Td,
  Text,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useCart } from "../../../../hooks/useCart";
import { Product } from "../../../../models";

interface ContentTableProps {
  product: Product;
}

export function ContentTable({ product }: ContentTableProps) {
  const { updateProductAmount, removeProduct } = useCart();

  function handleProductIncrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product?.amount! + 1,
    });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({
      productId: product.id,
      amount: product?.amount! - 1,
    });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Tr>
      <Td>
        <HStack spacing="6">
          <Image
            src={product?.imageURL}
            alt={`Imagem do produto ${product?.name}`}
            h={150}
            w={150}
            boxShadow="md"
            rounded='md'
          />
          <VStack spacing="4" fontWeight="bold">
            <Text>{product?.name}</Text>
            <Text>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product?.price)}
            </Text>
          </VStack>
        </HStack>
      </Td>
      <Td>
        <HStack spacing="2">
          <Circle
            bg="teal"
            cursor="pointer"
            color="white"
            size={30}
            onClick={() => handleProductIncrement(product)}
          >
            <BsPlusLg />
          </Circle>
          <Input readOnly w={50} value={product?.amount} />
          <Circle
            bg="teal"
            cursor="pointer"
            color="white"
            size={30}
            disabled={product?.amount! <= 1}
            onClick={() => handleProductDecrement(product)}
          >
            <FaMinus />
          </Circle>
        </HStack>
      </Td>
      <Td>
        <Flex justify="space-between">
          <Text fontWeight="bold">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product?.price * product?.amount!)}
          </Text>
          <MdDelete
            size={30}
            cursor="pointer"
            onClick={() => handleRemoveProduct(product?.id)}
            color="red"
          />
        </Flex>
      </Td>
    </Tr>
  );
}
