"use client";
import React from "react";
import itemType from "../type/Item-type";
const context = React.createContext({
  cart: [] as itemType[],
  addProductToCart: function (item: itemType) {},
  removeProductFromCart: function (item: itemType) {},
});

export default context;
