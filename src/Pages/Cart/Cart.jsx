import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../MyContext/AuthContextProvider";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
   const cartData = useLoaderData();
   const { user } = useContext(AuthContext);

   // Filter by user
   const filterByUserData = cartData.filter((data) => data.uid === user.uid);
   const [cartItems, setCartItems] = useState(filterByUserData);

   // Handle delete
   const handleDelete = (id) => {
      fetch(`${import.meta.env.VITE_SERVER_API}/cart/${id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount === 1) {
               const remainingItems = cartItems.filter(
                  (item) => item._id !== id
               );
               setCartItems(remainingItems);
            }
         });
   };

   return (
      <div className="h-screen bg-gray-100 pt-20 px-4 md:px-6 lg:px-10">
         <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
         <div className="mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
               {cartItems.map((item) => (
                  <CartItem
                     handleDelete={handleDelete}
                     key={item._id}
                     item={item}
                  />
               ))}
            </div>
            <CartSummary />
         </div>
      </div>
   );
};

export default Cart;
