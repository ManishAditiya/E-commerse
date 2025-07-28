import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return <p className="empty-cart">Your cart is empty. Add some products!</p>;
  }

  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-info">
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>
            <div className="cart-qty">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;