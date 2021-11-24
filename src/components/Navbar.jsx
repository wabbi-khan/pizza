import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContex";

const Navbar = () => {
  const cartStyle = {
    background: "#F59E0d",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-5">
        <Link to="/">
          <img
            style={{ height: 45, marginLeft: 60 }}
            src="/images/logo.png"
            alt="logo"
          />
        </Link>
        <ul className="flex items-center">
          <li className="ml-6">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span>{cart.totalItems}</span>
                <img className="ml-4" src="/images/cart.png" alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
