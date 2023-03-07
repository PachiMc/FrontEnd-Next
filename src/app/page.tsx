import { Inter } from "next/font/google";

import Item from "../components/Item";
import itemType from "../type/Item-type";

// DUMMY INFO
const DUMMY_ITEMS: itemType = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  price: 100,
  id: 1,
  quantity: 1,
};

///
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="m-auto grid w-3/4 gap-11 grid-cols-3 pb-40">
      <Item
        name={DUMMY_ITEMS.name}
        description={DUMMY_ITEMS.description}
        price={DUMMY_ITEMS.price}
        key="1"
        quantity={1}
        id={1}
      />
      <Item
        name={DUMMY_ITEMS.name}
        description={DUMMY_ITEMS.description}
        price={12}
        key="2"
        quantity={1}
        id={2}
      />
      <Item
        name={DUMMY_ITEMS.name}
        description={DUMMY_ITEMS.description}
        price={40}
        key="3"
        quantity={1}
        id={3}
      />
      <Item
        name={DUMMY_ITEMS.name}
        description={DUMMY_ITEMS.description}
        price={40}
        key="4"
        quantity={1}
        id={1}
      />
    </main>
  );
}
