"use client";
import userType from "@/model/User-type";
import React, { useEffect, useState } from "react";
import itemType from "../model/Item-type";
const context = React.createContext<userType | null>(null);

const CartProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <context.Provider value={null}>{children}</context.Provider>;
};
export default CartProvider;
