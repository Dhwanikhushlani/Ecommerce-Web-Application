import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  // Fetch product detail by ID
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product detail:', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" p-20 w-600 m-0">
      <img src={product.image} alt={product.title} className=" w-300 h-300
  object-fit: contain" />
      <h2 className='m-10'>{product.title}</h2>
      <p className=' m-10'>{product.description}</p>
      <p className=' m-10'><strong>Price:</strong> ${product.price}</p>
      <p className=' m-10'><strong>Category:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetail;
