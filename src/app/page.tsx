"use client";
import Search from "@/components/Search";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import Item from "../components/Item";
import itemType from "../model/Item-type";
type Data = {
  data: itemType[];
};

const Home = () => {

  const [items, setItems] = useState([] as itemType[]);
  //items adelante ddel map
  return (
    <div className="w-3/4 m-auto">
      <Search changeItems={setItems} />
      <main className=" grid gap-11 grid-cols-3 pb-40">
        {items &&
          items.map((item: itemType) => {
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
};



export default Home;
