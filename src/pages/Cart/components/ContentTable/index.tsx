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

export function ContentTable() {
  return (
    <Tr>
      <Td>
        <HStack spacing="6">
          <Image
            src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            h={100}
            boxShadow="md"
          />
          <VStack spacing="4" fontWeight="bold">
            <Text>Produto</Text>
            <Text>R$ 200</Text>
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
            onClick={() => console.log("+")}
          >
            <BsPlusLg />
          </Circle>
          <Input readOnly w={50} value="2" />
          <Circle
            bg="teal"
            cursor="pointer"
            color="white"
            size={30}
            onClick={() => console.log("-")}
          >
            <FaMinus />
          </Circle>
        </HStack>
      </Td>
      <Td>
        <Flex justify="space-between">
          <Text fontWeight="bold">R$ 500</Text>
          <MdDelete
            size={30}
            cursor="pointer"
            onClick={() => console.log("del")}
            color="red"
          />
        </Flex>
      </Td>
    </Tr>
  );
}
