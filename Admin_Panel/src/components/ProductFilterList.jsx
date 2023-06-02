

import { useState } from "react";

const products = [
  { id: 1, name: 'Apple', price: 10.99 },
  { id: 2, name: 'Banana', price: 19.99 },
  { id: 3, name: 'Vegetables', price: 5.99 },
  { id: 4, name: 'Spinach', price: 8.99 },
  // { id: 5, name: 'Peanut Butter', price: 14.99 },
];

function ProductFilterList() {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div className="flex justify-end items-end fixed bottom-0 right-0 m-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4 text-white">Product List</h1>
        <input
          type="text"
          placeholder="Search product..."
          value={filterText}
          onChange={handleFilterChange}
          className="mb-4 px-4 py-2 border border-gray-300 rounded-md"
        />
        <ul className="grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <li key={product.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductFilterList;


