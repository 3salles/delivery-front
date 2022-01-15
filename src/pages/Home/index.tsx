import {  Wrap } from "@chakra-ui/react";
import { ProductCart } from "../../components/common/ProductCard";
import { AppLayout } from "../../layouts/AppLayout";
import { Product } from "../../models";

import data from '../../utils/json/products.json'

export default function Home () {
  const drinks = data?.drinks as Product[];
  const snacks = data?.snacks as Product[];
  const foods = data?.food as Product[];

  return (
    <AppLayout >
      <Wrap>
        {drinks?.map(drink => (
          <ProductCart key={drink?.id} product={drink} category="drinks" />
        ))}
        {snacks?.map(snack => (
          <ProductCart key={snack?.id} product={snack} category="snacks" />
        ))}
        {foods?.map(food => (
          <ProductCart key={food?.id} product={food} category="food" />
        ))}
      </Wrap>
    </AppLayout>
  )
}