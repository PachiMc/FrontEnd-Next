"use client";
import userType from "@/model/User-type";
import { useEffect, useState } from "react";
import CartContext from "../context/cart-context";
import UserContext from "../context/user-context";
import itemType from "../model/Item-type";
import Header from "./Header";

const CartProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  // Perform localStorage action
  //ELIIMINARRRRRR
  //  const [isInitiallyFetched, setIsInitiallyFetched] = useState(false);
  //  const [cart, setCart] = useState<itemType[]>([]);
  //  const [user, setUser] = useState<userType | null>(null);
  //  useEffect(() => {
  //    let initialCart = localStorage.getItem("cart")
  //      ? JSON.parse(localStorage.getItem("cart")!)
  //      : [];
  //    setCart(initialCart);
  //    setIsInitiallyFetched(true);
  //  }, []);
  //
  //  useEffect(() => {
  //    if (isInitiallyFetched) {
  //      localStorage.setItem("cart", JSON.stringify(cart));
  //    }
  //  }, [cart, isInitiallyFetched]);
  //
  //  const initialValueContext = {
  //    cart: cart,
  //    addProductToCart: function (item: itemType) {
  //      let exist = this.cart.find((elem) => elem.id == item.id);
  //      if (exist) {
  //        exist.quantity += item.quantity;
  //      }
  //      setCart((prev) => {
  //        if (exist) {
  //          return [...this.cart];
  //        }
  //        return [...prev, { ...item }];
  //      });
  //    },
  //    removeProductFromCart: function (item: itemType) {
  //      let exist = this.cart.find((elem) => elem.id == item.id);
  //      if (exist && exist.quantity > 1) {
  //        exist.quantity--;
  //      } else if (exist) {
  //        this.cart = this.cart.filter((elem) => elem.id != item.id);
  //      }
  //      setCart([...this.cart]);
  //    },
  //  };

  return (
    <UserContext>
      <CartContext>{children}</CartContext>
    </UserContext>
  );
};

export default CartProvider;
