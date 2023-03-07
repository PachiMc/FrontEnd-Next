"use client";
import { context } from "../../context/cart-context";
import { useContext } from "react";
import ItemCart from "../../components/ItemCart";
import CartProvider from "../../components/GlobalProvider";
import itemType from "@/model/Item-type";
const CartTotal: React.FC = () => {
  const cartContext = useContext(context);

  return (
    <>
      <div className="w-3/5 m-auto">
        <div className="divider"></div>
        {cartContext.cart.map((elem) => (
          <ItemCart
            description={elem.description}
            id={elem.id}
            name={elem.name}
            price={elem.price}
            quantity={elem.quantity}
            key={elem.id}
          />
        ))}

        <button className="m-5 btn btn-active btn-primary">Buy now</button>
      </div>
    </>
  );
};
//<ItemCart />
export default CartTotal;
