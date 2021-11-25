import { React } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../CartContex";
import logo from "../images/logo.png";
import cartlogo from "../images/cart.png";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const { totalItems } = useCart();
  const cartStyle = {
    background: "#F59E0d",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "50px",
  };
  // const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-5">
        <Link to="/">
          <img style={{ height: 45, marginLeft: 60 }} src={logo} alt="logo" />
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
                <span> {totalItems} </span>
                <img className="ml-4" src={cartlogo} alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
