import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { useCart } from "../../hooks/useCart";
import { AppLayout } from "../../layouts/AppLayout";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddressFormData {
  address: string;
  complement: string;
  neighborhood: string;
  cep: string;
  city: string;
  state: string;
}

const addressFormSchema = Yup.object().shape({
  address: Yup.string().required("Endereço obrigatório"),
  complement: Yup.string(),
  neighborhood: Yup.string().required("Bairro obrigatório"),
  cep: Yup.string()
    .required("CEP obrigatório")
    .min(8, "Quantidade de dígitos incorreta")
    .max(8, "Quantidade de dígitos incorreta"),
  city: Yup.string().required("Cidade obrigatória"),
  state: Yup.string()
    .required("Estado obrigatório")
    .min(2, "Coloque somente a sigla")
    .max(2, "Coloque somente a sigla"),
});

export default function Payment() {
  const toast = useToast();
  const navigate = useNavigate();
  const { orders, finishPayment, createAddress } = useCart();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(addressFormSchema),
    mode: "onChange",
  });
  const { isDirty, isValid, errors } = formState;

  const total = orders?.reduce((sumTotal, product) => {
    return sumTotal + product?.price * product?.amount!;
  }, 0);

  const handleFinishPayment = async (data: any) => {
    try {
      createAddress(data);
      finishPayment();
      navigate("/");
      toast({
        title: "Compra finalizada com sucesso!",
        status: "success",
      });
    } catch {
      toast({
        title: "Problema!",
        description: "Aconteceu algum erro, tente mais tarde!",
        status: "error",
      });
    }
  };

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
          <Box as="form" mt="8" onSubmit={handleSubmit(handleFinishPayment)}>
            <VStack spacing="6">
              <HStack spacing="4">
                <FormControl isInvalid={errors?.address}>
                  <FormLabel htmlFor="address">Endereço</FormLabel>
                  <Input
                    id="address"
                    placeholder="Ex.: Rua H, 03"
                    {...register("address")}
                  />
                  <FormErrorMessage>
                    {errors?.address && errors?.address?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors?.complement}>
                  <FormLabel htmlFor="complement">Complemento</FormLabel>
                  <Input
                    id="complement"
                    placeholder="Ex.: bloco B"
                    {...register("complement")}
                  />
                  <FormErrorMessage>
                    {errors?.complement && errors?.complement?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors?.neighborhood}>
                  <FormLabel htmlFor="neighborhood">Bairro</FormLabel>
                  <Input
                    id="neighborhood"
                    placeholder="Ex.: Araçagi"
                    {...register("neighborhood")}
                  />
                  <FormErrorMessage>
                    {errors?.neighborhood && errors?.neighborhood?.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              <HStack spacing="4">
                <FormControl isInvalid={errors?.cep}>
                  <FormLabel htmlFor="cep">CEP</FormLabel>
                  <Input
                    id="cep"
                    placeholder="Ex.: 6518-000"
                    {...register("cep")}
                  />
                  <FormErrorMessage>
                    {errors?.cep && errors?.cep?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors?.city}>
                  <FormLabel htmlFor="city">Cidade</FormLabel>
                  <Input
                    id="city"
                    placeholder="Ex.: Raposa"
                    {...register("city")}
                  />
                  <FormErrorMessage>
                    {errors?.city && errors?.city?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors?.state}>
                  <FormLabel htmlFor="state">Estado</FormLabel>
                  <Input
                    id="state"
                    placeholder="Ex.: MA"
                    {...register("state")}
                  />
                  <FormErrorMessage>
                    {errors?.state && errors?.state?.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              <Button
                type="submit"
                colorScheme="teal"
                disabled={!isDirty || (isDirty && !isValid)}
              >
                Finalizar pagamento
              </Button>
            </VStack>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}
