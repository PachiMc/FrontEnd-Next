"use client";
import { context } from "@/context/cart-context";
import itemType from "@/model/Item-type";
import { useContext } from "react";

const ItemCart: React.FC<itemType> = (item) => {
  const cartContext = useContext(context);
  return (
    <div className="m-5 p-6 flex flex-row place-content-between h-20 card bg-base-300 rounded-box place-items-center">
      {item.name}
      <div className="relative w-40">
        <button
          onClick={() => {
            cartContext.removeProductFromCart({ ...item, quantity: 1 });
          }}
          className="absolute left-0 top-0 rounded-r-none btn btn-square"
        >
          -
        </button>
        <input
          disabled
          type="text"
          className="w-full text-center px-12 input input-bordered"
          value={item.quantity}
        />
        <button
          onClick={() => {
            cartContext.addProductToCart({ ...item, quantity: 1 });
          }}
          className="absolute right-0 top-0 rounded-l-none btn btn-square"
        >
          +
        </button>
      </div>
      ${item.price * item.quantity}
    </div>
  );
};
export default ItemCart;
