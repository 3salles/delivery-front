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
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

import { AppLayout } from "../../layouts/AppLayout";

import { ContentTable } from "./components/ContentTable";

export default function Cart() {
  const { orders } = useCart();

  const navigate = useNavigate();

  const total = orders?.reduce((sumTotal, product) => {
    return sumTotal + product?.price * product?.amount!;
  }, 0);

  return (
    <AppLayout>
      <Box height={orders?.length > 3 ? 'full' : '82vh'}>
        <Table mt="4" variant="simple" bg="white" rounded="md">
          <Thead>
            <Tr>
              <Th>Produto</Th>
              <Th>Quantidade</Th>
              <Th>Subtotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.map((order) => (
              <ContentTable key={order?.id} product={order} />
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>
                <Button colorScheme="teal" onClick={() => navigate('/payment')}>Finalizar pedido</Button>
              </Th>
              <Th />
              <Th>
                <Text>
                  Total{" "}
                  <Text as="span" fontSize="xl">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(total)}
                  </Text>
                </Text>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </AppLayout>
  );
}
