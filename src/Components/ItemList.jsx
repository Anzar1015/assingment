import React, { useState } from "react";
import ItemDetails from "./ItemDetails";

const ItemList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      {items.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl font-semibold text-gray-500">
            Search not found
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4  bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition"
            >
              <div className="flex justify-between mt-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="px-1 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View
                </button>
              </div>
              <p className="text-gray-600 mt-4">{item.description}</p>
              <p className="text-gray-600 mt-2">Price - {item.price}</p>
            </div>
          ))}
        </div>
      )}

      {selectedItem && (
        <ItemDetails
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default ItemList;
