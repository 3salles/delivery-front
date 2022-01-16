import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { AppLayout } from "../../layouts/AppLayout";

export default function Payment() {
  const toast = useToast()
  const navigate = useNavigate()
  const { orders, finishPayment } = useCart();

  const total = orders?.reduce((sumTotal, product) => {
    return sumTotal + product?.price * product?.amount!;
  }, 0);

  const handleFinishPayment = (event: FormEvent) => {
    try {
      event.preventDefault()
    finishPayment()
    navigate('/')
    toast({
      title: "Compra finalizada com sucesso!",
      status: "success",
    });
    
    } catch{
      toast({
        title: "Problema!",
        description: "Aconteceu algum erro, tente mais tarde!",
        status: "error",
      });
    }
  }

  return (
    <AppLayout>
      <Box h="82vh">
        <Heading color="white">
          <Flex justify="space-between" align="center">
            <Text>Finalizar pedido</Text>
            <Text fontSize="xl">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </Flex>
        </Heading>
        <Box mt="6" bg="white" rounded="md" boxShadow="md" p="8">
          <Text as="h2" fontWeight="bold" fontSize="2xl" textAlign="center">
            Endereço de entrega
          </Text>
          <Box as="form" mt="8">
            <VStack spacing="6">
              <HStack spacing="4">
                <Box>
                  <FormLabel>Endereço</FormLabel>
                  <Input placeholder="Ex.: Rua H, 03" />
                </Box>
                <Box>
                  <FormLabel>Complemento</FormLabel>
                  <Input placeholder="Ex.: bloco B" />
                </Box>
                <Box>
                  <FormLabel>Bairro</FormLabel>
                  <Input placeholder="Ex.: Araçagi" />
                </Box>
              </HStack>
              <HStack spacing="4">
                <Box>
                  <FormLabel>CEP</FormLabel>
                  <Input placeholder="Ex.: 6518-000" />
                </Box>
                <Box>
                  <FormLabel>Cidade</FormLabel>
                  <Input placeholder="Ex.: Raposa" />
                </Box>
                <Box>
                  <FormLabel>Estado</FormLabel>
                  <Input placeholder="Ex.: MA" />
                </Box>
              </HStack>
              <Button type="submit" colorScheme="teal" onClick={handleFinishPayment}>
                Finalizar pagamento
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}
