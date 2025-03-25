import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Cardslice";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="p-5 flex flex-wrap gap-3 justify-center">
      <input
        type="text"
        placeholder="🔍 Search by title..."
        onChange={handleSearchChange}
        className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-md transition"
      />
    </div>
  );
};

export default SearchBox;
