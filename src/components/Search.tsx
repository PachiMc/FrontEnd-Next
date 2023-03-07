"use client";

import React, { useEffect, useState } from "react";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    const timer = setTimeout(function () {
      //searchHandler(search); fetch de la api
    }, 400);
    return clearTimeout(timer);
  }, [search]);

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
export default Search;
