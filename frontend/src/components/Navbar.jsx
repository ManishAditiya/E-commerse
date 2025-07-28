import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">E-Shop</div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>
        <NavLink to="/saved" className="nav-link">
          Saved Items
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;