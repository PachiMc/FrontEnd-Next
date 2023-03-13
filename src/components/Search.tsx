"use client";
import React, { useEffect, useState } from "react";

const Search = ({ changeItems }: any) => {
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const timer = setTimeout(function () {
      fetch(
        process.env.NEXT_PUBLIC_API +
          (search ? "Item/SearchItem/?query=" + search : "Item/Get"),
        { cache: "no-store" }
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.success) {
            changeItems(json.data);
          }
        });
    }, 300);
    return () => clearTimeout(timer);
  }, [changeItems, search]);
  return (
    <div className="form-control w-1/4  my-10 ">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
export default Search;
