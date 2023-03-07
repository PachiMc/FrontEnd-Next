"use client";
import { useEffect, useState } from "react";
import cartContext from "../context/cart-context";
import itemType from "../type/Item-type";
import Header from "./Header";

const CartProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  // Perform localStorage action
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
      let exist = this.cart.find((elem) => elem.id == item.id);
      if (exist) {
        exist.quantity += item.quantity;
      }
      setCart((prev) => {
        if (exist) {
          return [...this.cart];
        }
        return [...prev, { ...item }];
      });
    },
    removeProductFromCart: function (item: itemType) {
      let exist = this.cart.find((elem) => elem.id == item.id);
      if (exist && exist.quantity > 1) {
        exist.quantity--;
      } else if (exist) {
        this.cart = this.cart.filter((elem) => elem.id != item.id);
      }
      setCart([...this.cart]);
    },
  };
  return (
    <cartContext.Provider value={initialValueContext}>
      <Header />
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
