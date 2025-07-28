import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import { SavedItemsProvider } from './context/SavedItemsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <SavedItemsProvider>
      <App />
    </SavedItemsProvider>
  </CartProvider>
);
