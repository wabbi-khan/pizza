import React from "react";
import Product from "./Product";
const Products = () => {
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8 mx-14">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24 mx-20">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
