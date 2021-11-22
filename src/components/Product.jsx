import React from "react";
// import { Link } from "react-router-dom";

const Product = ({ pizzaName, pizzaSize, images, price }) => {
  return (
    // <Link to="/products/category">
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
        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">
          ADD
        </button>
      </div>
    </div>
    // </Link>
  );
};

export default Product;
