"use client";
import Loading from "@/app/loading";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function saveChanges(
  id: number,
  name: string,
  description: string,
  price: number,
  stock: number
) {
  fetch(process.env.NEXT_PUBLIC_API + "Item/UpdateItem", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + document.cookie.split("=")[1],
    },
    body: JSON.stringify({ id, name, description, price, stock }),
  }).then((response) => {
    if (response.status == 200) {
      Swal.fire("Success", "item updated!", "success");
    } else {
      Swal.fire("Error", "item not updated!", "error");
    }
  });
}

const Edit = ({ params }: { params: { id: number } }) => {
  const initialItem = { id: 0, name: "", price: 0, description: "", stock: 0 };
  const [item, setItem] = useState(initialItem);
  const [loading, setLoading] = useState(true);
  const nameInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const stockInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API + "Item/Get/" + params.id)
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          setItem(json.data);
          setLoading(false);
        }
      });
  }, [params.id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="form-control w-full max-w-xs m-auto">
            <label className="label">
              <span className="label-text">ID</span>
            </label>
            <input
              type="number"
              value={item.id}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              ref={nameInput}
              value={item.name}
              onChange={(e) =>
                setItem((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Descripcion</span>
            </label>
            <input
              type="text"
              ref={descriptionInput}
              value={item.description}
              onChange={(e) =>
                setItem((prev) => {
                  return { ...prev, description: e.target.value };
                })
              }
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              value={item.price}
              ref={priceInput}
              onChange={(e) =>
                setItem((prev) => {
                  return { ...prev, price: parseInt(e.target.value) };
                })
              }
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="number"
              value={item.stock}
              ref={stockInput}
              onChange={(e) =>
                setItem((prev) => {
                  return { ...prev, stock: parseInt(e.target.value) };
                })
              }
              className="input input-bordered w-full max-w-xs"
            />
            <button
              onClick={() => {
                saveChanges(
                  params.id,
                  nameInput.current!.value,
                  descriptionInput.current!.value,
                  parseInt(priceInput.current!.value),
                  parseInt(stockInput.current!.value)
                );
              }}
              className="btn btn-outline mt-8 btn-accent"
            >
              save changes
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Edit;
