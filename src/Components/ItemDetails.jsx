import React from "react";

const ItemDetails = ({ item, onClose }) => {
  return (
<div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold">{item.name}</h2>

        <img
          src={item.photo_url}
          alt={item.name}
          className="w-full h-64 object-contain my-4"
        />
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-800 font-bold mt-4">Price - ${item.price}</p>
        <p className="text-gray-800 font-bold mt-4">Category - {item.category}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
