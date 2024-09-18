import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div className="flex wrap justify-space-around gap-20px">
      {products.map((product) => (
        <div className="card  bg-black shadow-xl rounded-lg p-15 w-20 text-center box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
  transition: 0.3s" key={product.id}>
          <img src={product.image} alt={product.title} className="  w-150 h-150
  object-fit: contain" />
          <h3>{product.title}</h3>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
