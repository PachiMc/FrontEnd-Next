"use client";

import React, { useEffect, useState } from "react";
import itemType from "../model/Item-type";

export const context = React.createContext({
  cart: [] as itemType[],
  addProductToCart: function (item: itemType) {},
  removeProductFromCart: function (item: itemType) {},
});

const CartProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  const [cart, setCart] = useState<itemType[]>([]);

  useEffect(() => {
    let initialCart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")!)
      : [];
    setCart(initialCart);
    setIsInitiallyFetched(true);
  }, []);

  useEffect(() => {
    if (isInitiallyFetched) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isInitiallyFetched]);

  const initialValueContext = {
    cart: cart,
    addProductToCart: function (item: itemType) {
      setCart((prev) => {
        let exist = prev.find((elem) => elem.id == item.id);
        if (exist) {
          if (exist.quantity < item.stock) {
            exist.quantity += item.quantity;
          }
          return [...prev];
        }
        return [...prev, { ...item }];
      });
    },
    removeProductFromCart: function (item: itemType) {
      setCart((prev) => {
        let exist = prev.find((elem) => elem.id == item.id);
        let filter: itemType[] = cart;
        if (exist && exist.quantity > 1) {
          exist.quantity--;
        } else if (exist) {
          filter = prev.filter((elem) => elem.id != item.id);
        }
        return [...filter];
      });
    },
  };

  return (
    <context.Provider value={initialValueContext}>{children}</context.Provider>
  );
};
export default CartProvider;
