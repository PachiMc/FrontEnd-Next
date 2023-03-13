"use client";
import userType from "@/model/User-type";
import { useEffect, useState } from "react";
import CartContext from "../context/cart-context";
import UserContext from "../context/user-context";
import itemType from "../model/Item-type";
import Header from "./Header/Header";

const CartProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <UserContext>
      <CartContext>{children}</CartContext>
    </UserContext>
  );
};

export default CartProvider;
