"use client";
import { useContext } from "react";
import context from "../context/cart-context";
import itemType from "../type/Item-type";
//////////// env
const admin = false;

/////////////////

const Item: React.FC<itemType> = (item) => {
  const cartContext = useContext(context);
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <h3 className="text-lime-50 text-lg font-bold">
          {item.quantity.toString()}
        </h3>
        <h3 className="text-lime-50 text-lg font-bold">
          ${item.price.toString()}
        </h3>

        <div className="card-actions mt-4 justify-end">
          {admin ? (
            <>
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-secondary">Remove</button>
            </>
          ) : (
            <button
              onClick={() => {
                cartContext.addProductToCart(item);
              }}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Item;
