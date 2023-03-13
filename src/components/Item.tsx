"use client";
import { useContext } from "react";
import { context } from "../context/cart-context";
import { contextUser } from "../context/user-context";
import itemType from "../model/Item-type";
import Link from "next/link";
import Swal from "sweetalert2";

const Item: React.FC<itemType> = (item) => {
  const cartContext = useContext(context);
  const userContext = useContext(contextUser);
  function removeItem(id: number) {
    fetch(process.env.NEXT_PUBLIC_API + "Item/DeleteItem/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + document.cookie.split("=")[1],
      },
    }).then((response) => {
      if (response.status == 200) {
        Swal.fire("Success", "item removed!", "success").then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } else {
        Swal.fire("Error", "item not removed!", "error");
      }
    });
  }

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <h3 className="text-lime-50 text-lg font-bold">
          ${item.price.toString()}
        </h3>
        <h3 className="text-lime-50 text-lg font-bold">
          stock avaible: {item.stock.toString()}
        </h3>
        <div className="card-actions mt-4 justify-end">
          {userContext.user?.admin ? (
            <>
              <Link href={"edit/" + item.id}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button
                onClick={() => {
                  removeItem(item.id);
                }}
                className="btn btn-secondary"
              >
                Remove
              </button>
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
