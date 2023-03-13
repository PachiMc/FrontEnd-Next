"use client";
import Search from "@/components/Search";
import { useState } from "react";
import Item from "../components/Item";
import itemType from "../model/Item-type";

export default function Home() {
  const [items, setItems] = useState([] as itemType[]);

  return (
    <div className="w-3/4 m-auto">
      <Search changeItems={setItems} />
      <main className=" grid gap-11 grid-cols-3 pb-40">
        {items.map((item: itemType) => {
          return (
            item.stock > 0 && (
              <Item
                stock={item.stock}
                name={item.name}
                description={item.description}
                price={item.price}
                key={item.id}
                quantity={1}
                id={item.id}
              />
            )
          );
        })}
      </main>
    </div>
  );
}
