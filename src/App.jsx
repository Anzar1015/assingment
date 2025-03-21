import React, { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";
import Loader from "./components/Loader";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.slingacademy.com/v1/sample-data/products?limit=100
      `);
      const result = await response.json();
      console.log(result.products);
      setData(result.products);
      setFilteredData(result.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  const handleFilter = (sortBy) => {
    const sorted = [...filteredData].sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
    setFilteredData(sorted);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
      
      {loading ? (
        <Loader />
      ) : (
        <>
          <ItemList items={currentItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
