import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import Button from "../Button/Button";

const SearchBar = ({ onSearch }: { onSearch: (term: string) => void }) => {
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const search = () => {
    onSearch(term);
  };

  return (
    <div id="SearchBar" className="flex items-center justify-center gap-2">
      <input
        className="border border-neutral-800 items-center gap-2 bg-neutral-900 rounded-md px-2 py-1 h-12 hover:border-purple-400 duration-300 ease-in-out focus:outline-none outline-transparent w-full font-semibold"
        type="text"
        name="search"
        value={term}
        onChange={handleChange}
        placeholder="What songs you wanna add?"
      />
      <Button variant="circle" onClick={search}>
        <GoSearch />
      </Button>
    </div>
  );
};

export default SearchBar;
