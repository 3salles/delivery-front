import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";



import { AppLayout } from "../../layouts/AppLayout";
import { ContentTable } from "./components/ContentTable";

export default function Cart() {
  return (
    <AppLayout>
      <Box height="82vh">
        <Table mt="4" variant="simple" bg="white" rounded="md">
          <Thead>
            <Tr>
              <Th>Produto</Th>
              <Th>Quantidade</Th>
              <Th>Subtotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            <ContentTable />
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>
                <Button colorScheme='teal'>Finalizar pedido</Button>
              </Th>
              <Th />
              <Th>
                <Text>
                  Total <Text as="span" fontSize='xl'>R$ 500</Text>
                </Text>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </AppLayout>
  );
}
