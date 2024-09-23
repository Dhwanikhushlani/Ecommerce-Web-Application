import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="font-bold text-lg mb-2">{product.title}</h2>
      <p className="text-gray-700 font-semibold mb-2">${product.price}</p>
      <p className="text-gray-500">
        {product.description.length > 100
          ? product.description.substring(0, 100) + '...'
          : product.description}
      </p>
    </div>
  );
};

export default ProductCard;
