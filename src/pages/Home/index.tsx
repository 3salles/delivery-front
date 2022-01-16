import { Wrap } from "@chakra-ui/react";
import { ProductCart } from "../../components/common/ProductCard";
import { useCart } from "../../hooks/useCart";
import { AppLayout } from "../../layouts/AppLayout";



export default function Home() {
  const { drinks, food, snacks, orders} = useCart();
  
  
  console.log(orders)

  return (
    <AppLayout>
      <Wrap>
        {drinks?.map((drink) => (
          <ProductCart key={drink?.id} product={drink} category="drinks" />
        ))}
        {snacks?.map((snack) => (
          <ProductCart key={snack?.id} product={snack} category="snacks" />
        ))}
        {food?.map((food) => (
          <ProductCart key={food?.id} product={food} category="food" />
        ))}
      </Wrap>
    </AppLayout>
  );
}
