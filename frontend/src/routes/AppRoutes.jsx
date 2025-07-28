import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';
import SavedPage from '../pages/SavedPage';
import ProductDetails from '../pages/ProductDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/saved" element={<SavedPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default AppRoutes;