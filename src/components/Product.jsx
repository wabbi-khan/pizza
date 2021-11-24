import { React, useContext, useState } from "react";
import { CartContext } from "../CartContex";
const Product = ({ pizzaName, pizzaSize, images, price }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (e) => {
    e.preventDefault();

    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[pizzaName]) {
      _cart.items[pizzaName] += 1;
    } else {
      _cart.items[pizzaName] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };
  return (
    <div>
      <img src={images} alt="pizza" />
      {/* <img src="/images/peproni.png" alt="pizza" /> */}
      <div className="text-center">
        <h2 className="text-lg font-bold py-2">{pizzaName}</h2>
        <span className="bg-gray-200 py-1 rounded-full px-4 text-sm">
          {pizzaSize}
        </span>
      </div>
      <div className=" flex justify-between items-center mt-4">
        <span>Rs. {price}</span>
        <button
          disabled={isAdding}
          onClick={(e) => {
            addToCart(e, Product);
          }}
          className={`${
            isAdding ? "bg-green-500" : "bg-yellow-500"
          }  py-1 px-4 rounded-full font-bold`}
        >
          ADD{isAdding ? "ED" : ""}
        </button>
      </div>
    </div>
    // </Link>
  );
};

export default Product;
