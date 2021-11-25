// import { React, useContext, useEffect, useState } from "react";
// import { CartContext } from "../CartContex";
// // import product from "../components/Product";
// // import Product from "../components/Product";

// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const { cart } = useContext(CartContext);
//   useEffect(() => {
//     if (!cart.items) {
//       return;
//     }
//     fetch("Product/cart-items", {
//       method: "POST",
//       headers: {
//         "Content-Type": " application / json",
//       },
//       body: JSON.stringify({ ids: Object.keys(cart.items) }),
//     })
//       .then((res) => res.json())
//       .then((products) => {
//         setProducts(products);
//       });
//   }, [cart]);
//   return (
//     <div className="container mx-auto lg:w-1/2 w-full pb-24">
//       <h1 className="my-12 font-bold">Cart Items</h1>
//       <ul>
//         {products.map((product) => {
//           return (
//             <li className="mb-12">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <img className="h-16" src="/images/peproni.png" alt="pizza" />
//                   <span className="font-bold ml-4 w-48">Chicken Specail</span>
//                 </div>
//                 <div>
//                   <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
//                     -
//                   </button>
//                   <b className="mx-4">5</b>
//                   <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
//                     +
//                   </button>
//                 </div>
//                 <span>Rs. 400</span>
//                 <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
//                   Delete
//                 </button>
//               </div>
//             </li>
//           );
//         })}

//         {/* <li className="mb-12">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <img className="h-16" src="/images/peproni.png" alt="pizza" />
//               <span className="font-bold ml-4 w-48">Chicken Specail</span>
//             </div>
//             <div>
//               <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
//                 -
//               </button>
//               <b className="mx-4">5</b>
//               <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
//                 +
//               </button>
//             </div>
//             <span>Rs. 400</span>
//             <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
//               Delete
//             </button>
//           </div>
//         </li> */}
//       </ul>
//       <hr />
//       <div className="text-right">
//         <b>Grand Total:</b> Rs. 400
//       </div>
//       <div className="text-right mt-6">
//         <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
//           Order Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import { React } from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const mystyle = {
    fontSize: 40,
    fontWeight: 600,
  };
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <h1 style={mystyle} className="text-center">
        cart is empty
      </h1>
    );
  return (
    <section className="container mx-auto lg:w-1/2 w-full pb-24">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 style={{ fontSize: 20, fontWeight: 500 }}>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h1>
          <table className="table table-light table-hover mt-6">
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="w-1/5">
                    <img src={item.img} alt="" className="h-22 w-22 mb-10" />
                  </td>
                  <th className="w-1/5 pb-10 px-4">{item.title}</th>
                  <th className="w-1/5 pb-10">{item.size}</th>
                  <th className="w-1/5 pb-10">{item.price}</th>
                  <th className="w-1/5 pb-10">Quantity: ({item.quantity}) </th>
                  <th className="w-1/2 pb-10  flex text-center">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className=" bg-yellow-500 px-4 ml-2 py-2 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-yellow-500  ml-2 px-4 py-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className=" bg-red-500 px-4  ml-2 py-2 rounded"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="flex justify-between">
          <div style={{ marginLeft: 400 }}>
            <b> Total Price: Rs. {cartTotal}</b>

            <button
              onClick={() => emptyCart()}
              className="bg-yellow-500 py-1 px-2 ml-4 rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div>
          <button
            style={{ marginLeft: 450, marginTop: 20 }}
            className="bg-green-500 py-2 px-14 rounded"
          >
            Pay Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
