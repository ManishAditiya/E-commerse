import React from 'react';
import { useSavedItems } from '../context/SavedItemsContext';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onBuyNow }) => {
  const { addToSaved } = useSavedItems();
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => onBuyNow(product)}>Buy Now</button>
      <button onClick={() => addToSaved(product)}>Save for Later</button>
    </div>
  );
};

export default ProductCard;