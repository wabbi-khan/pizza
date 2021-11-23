// import { React, useContext } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
// import { CartContext } from "../CartContex";
const Products = () => {
  // const { name } = useContext(CartContext);

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch(Data)
  //     .then((res) => res.json())
  //     .then((products) => {
  //       setProducts(products);
  //     });
  // }, []);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8 mx-14">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24 mx-20">
        {/* {products.map((product) => (
          <Product key={product._id} />
        ))} */}
        <Link to="/products/chicken">
          <Product
            images="/images/peproni.png"
            pizzaName="Chicken special"
            pizzaSize="small"
            price="200"
          />
        </Link>
        <Link to="/products/bqq">
          <Product
            images="/images/peproni.png"
            pizzaName="BQQ special"
            pizzaSize="large"
            price="300"
          />
        </Link>
        <Link to="/products/beef">
          <Product
            images="/images/peproni.png"
            pizzaName="Beef special"
            pizzaSize="small"
            price="200"
          />
        </Link>

        <Link to="/products/mutton">
          <Product
            images="/images/peproni.png"
            pizzaName="Mutton special"
            pizzaSize="large"
            price="300"
          />
        </Link>
        <Link to="/products/fish">
          <Product
            images="/images/peproni.png"
            pizzaName="Fish special"
            pizzaSize="small"
            price="200"
          />
        </Link>
        <Link to="/products/chicken">
          <Product
            images="/images/peproni.png"
            pizzaName="Chicken special"
            pizzaSize="small"
            price="200"
          />
        </Link>
        <Link to="/products/chicken">
          <Product
            images="/images/peproni.png"
            pizzaName="Chicken special"
            pizzaSize="small"
            price="200"
          />
        </Link>
        <Link to="/products/chicken">
          <Product
            images="/images/peproni.png"
            pizzaName="Chicken special"
            pizzaSize="small"
            price="200"
          />
        </Link>
        <Link to="/products/chicken">
          <Product
            images="/images/peproni.png"
            pizzaName="Chicken special"
            pizzaSize="small"
            price="200"
          />
        </Link>
        <Link to="/products/chicken">
          <Product
            images="/images/peproni.png"
            pizzaName="Chicken special"
            pizzaSize="small"
            price="200"
          />
        </Link>
      </div>
    </div>
  );
};

export default Products;
