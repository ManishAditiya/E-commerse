import React from 'react';

const ProductDetails = () => {
  // Placeholder for product details
  const product = {
    id: 1,
    name: 'Sample Product',
    description: 'This is a detailed description of the sample product.',
    price: 29.99,
    imageUrl: 'path/to/image.jpg',
  };

  return (
    <div className="product-details">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>${product.price.toFixed(2)}</h2>
      <button>Add to Cart</button>
      <button>Buy Now</button>
      <button>Save for Later</button>
    </div>
  );
};

export default ProductDetails;