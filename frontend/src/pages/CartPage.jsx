import React from 'react';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">🛒 Your Shopping Cart</h1>
      <div className="cart-content">
        <Cart />
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <p>Items: <span id="cart-items-count">{totalItems}</span></p>
          <p>Total: <span id="cart-total-price">₹{totalPrice}</span></p>
          <button className="checkout-btn" disabled={totalItems === 0}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;