import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Singleproduct from "./pages/Singleproduct";
import { CartContext } from "./CartContex";
import { useEffect, useState } from "react";
function App() {
  const [cart, setCart] = useState({});
  {
    /* fetching cart from local storage */
  }
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/products" element={<ProductsPage />} />
          {/* <Route path="/products/asd" element={<Chicken />} /> */}
          <Route
            path="/products/chicken"
            element={
              <Singleproduct
                images="/images/peproni.png"
                pizzaName="Chicken special"
                pizzaSize="small"
                price="200"
              />
            }
          />
          <Route
            path="/products/bqq"
            element={
              <Singleproduct
                images="/images/peproni.png"
                pizzaName="BQQ special"
                pizzaSize="large"
                price="300"
              />
            }
          />
          <Route
            path="/products/beef"
            element={
              <Singleproduct
                images="/images/peproni.png"
                pizzaName="Beef special"
                pizzaSize="small"
                price="200"
              />
            }
          />
          <Route
            path="/products/mutton"
            element={
              <Singleproduct
                images="/images/peproni.png"
                pizzaName="Mutton special"
                pizzaSize="large"
                price="300"
              />
            }
          />
          <Route
            path="/products/fish"
            element={
              <Singleproduct
                images="/images/peproni.png"
                pizzaName="Fish special"
                pizzaSize="small"
                price="200"
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </>
  );
}

export default App;
