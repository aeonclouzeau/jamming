import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      id="SearchBar"
      className="flex border border-transparent items-center gap-2 bg-neutral-800 rounded-md px-2 py-1 w-full h-12 hover:border-purple-400 duration-300 ease-in-out"
    >
      <GoSearch className="text-neutral-500" />
      <input
        className="border-none focus:outline-none outline-transparent bg-transparent w-full font-semibold"
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="What songs you wanna add?"
      />
    </div>
  );
};

export default SearchBar;
