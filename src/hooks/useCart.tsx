import { useToast } from "@chakra-ui/react";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Category, Product } from "../models";
import { api } from "../services/api";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  drinks: Product[];
  food: Product[];
  snacks: Product[];
  orders: Product[];
  addOrder: (id: number, category: Category) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const toast = useToast();

  const [drinks, setDrinks] = useState<Product[]>([]);
  const [food, setFood] = useState<Product[]>([]);
  const [snacks, setSnacks] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setDrinks(response?.data?.drinks);
      setFood(response?.data?.food);
      setSnacks(response?.data?.snacks);
    });
  }, []);

  const addOrder = async (id: number, category: Category) => {
    try {
      const response = await api.post("/order", {
        category,
        id,
      });

      const updateCart = [...orders];
      const productExists = updateCart?.find((product) => product?.id === id);
      const currentAmount =
        productExists?.amount !== undefined && productExists
          ? productExists.amount
          : 0;
      const amount = currentAmount + 1;

      if (productExists) {
        productExists.amount = amount;
      } else {
        const order = response?.data;

        const newProduct = {
          ...order,
          amount: 1,
        };

        updateCart.push(newProduct);
      }

      setOrders(updateCart);

      toast({
        title: "Produto adicionado!",
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Problema!",
        description: "Aconteceu algum erro, tente mais tarde!",
        status: "error",
      });

      console.error(error);
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...orders];
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setOrders(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast({
        title: "Problema!",
        description: "Aconteceu algum erro, tente mais tarde!",
        status: "error",
      });
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...orders];

      const productExists = updatedCart.find(
        (product) => product?.id === productId
      );

      if (productExists) {
        productExists.amount = amount;
        setOrders(updatedCart);
      } else {
        throw Error();
      }
    } catch {
      toast({
        title: "Problema!",
        description: "Aconteceu algum erro, tente mais tarde!",
        status: "error",
      });
    }
  };

  return (
    <CartContext.Provider
      value={{ drinks, food, snacks, orders, addOrder, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
