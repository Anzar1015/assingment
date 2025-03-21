import React, { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex gap-4 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        className="p-2 border rounded w-full"
        placeholder="Search by title or description"
      />

      <select
        onChange={(e) => onFilter(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="name">Sort by name</option>
        <option value="price">Sort by price</option>
      </select>
    </div>
  );
};

export default SearchFilter;
