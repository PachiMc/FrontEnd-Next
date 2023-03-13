"use client";
import { useRef } from "react";
import Swal from "sweetalert2";

async function addItem(
  name: string,
  price: number,
  stock: number,
  description: string
) {
  let jwtToken = document.cookie.split("=")[1];
  const res = await fetch(process.env.NEXT_PUBLIC_API + "Item/AddItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + jwtToken,
    },
    credentials: "include",
    body: JSON.stringify({
      name: name,
      price: price,
      stock: stock,
      description: description,
    }),
  });
  const json = await res.json();
  if (json.success) {
    Swal.fire("Success", "item added!", "success");
  } else {
    Swal.fire("Error", "item not added!", "error");
  }
  //   document.cookie = "token=Bearer " + json.data;
  return json;
}

const Edit = ({ params }: { params: { id: number } }) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const stockInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="form-control w-full max-w-xs m-auto">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          ref={nameInput}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Descripcion</span>
        </label>
        <input
          type="text"
          ref={descriptionInput}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="number"
          ref={priceInput}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Stock</span>
        </label>
        <input
          type="number"
          ref={stockInput}
          className="input input-bordered w-full max-w-xs"
        />
        <button
          onClick={() => {
            addItem(
              nameInput.current!.value,
              parseInt(priceInput.current!.value),
              parseInt(stockInput.current!.value),
              descriptionInput.current!.value
            );
          }}
          className="btn btn-outline mt-8 btn-accent"
        >
          save changes
        </button>
      </div>
    </>
  );
};
export default Edit;
