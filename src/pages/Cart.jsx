import { React, useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContex";
// import Product from "../components/Product";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    if (!cart.items) {
      return;
    }
    fetch("Product/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": " application / json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, [cart]);
  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold">Cart Items</h1>
      <ul>
        {products.map((product) => {
          return (
            <li className="mb-12">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-16" src="/images/peproni.png" alt="pizza" />
                  <span className="font-bold ml-4 w-48">Chicken Specail</span>
                </div>
                <div>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    -
                  </button>
                  <b className="mx-4">5</b>
                  <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                    +
                  </button>
                </div>
                <span>Rs. 400</span>
                <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
                  Delete
                </button>
              </div>
            </li>
          );
        })}

        {/* <li className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/images/peproni.png" alt="pizza" />
              <span className="font-bold ml-4 w-48">Chicken Specail</span>
            </div>
            <div>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                -
              </button>
              <b className="mx-4">5</b>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                +
              </button>
            </div>
            <span>Rs. 400</span>
            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
              Delete
            </button>
          </div>
        </li> */}
      </ul>
      <hr />
      <div className="text-right">
        <b>Grand Total:</b> Rs. 400
      </div>
      <div className="text-right mt-6">
        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
