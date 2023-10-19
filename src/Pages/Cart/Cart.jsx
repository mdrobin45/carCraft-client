import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../MyContext/AuthContextProvider";
import SiteTitle from "../../SiteTitle/SiteTitle";
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
      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Please wait...",
         isLoading: true,
      });

      fetch(`${import.meta.env.VITE_SERVER_API}/cart/${id}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount === 1) {
               toast.update(toastMsg, {
                  render: "Product removed",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               const remainingItems = cartItems.filter(
                  (item) => item._id !== id
               );
               setCartItems(remainingItems);
            } else {
               toast.update(toastMsg, {
                  render: "Something went wrong!",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };

   return (
      <>
         <SiteTitle>Cart</SiteTitle>
         <div className="h-screen bg-gray-100 pt-20 px-4 md:px-6 lg:px-10">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto justify-center px-6 md:flex md:space-x-6 xl:px-0">
               {cartItems.length ? (
                  <div className="rounded-lg md:w-2/3">
                     {cartItems.map((item) => (
                        <CartItem
                           handleDelete={handleDelete}
                           key={item._id}
                           item={item}
                        />
                     ))}
                  </div>
               ) : (
                  <div className="rounded-lg flex flex-col items-center justify-center md:w-2/3">
                     <img
                        src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
                        alt=""
                     />
                     <h2 className="text-2xl mt-2 text-gray-400">
                        Empty Cart!
                     </h2>
                  </div>
               )}

               <CartSummary />
            </div>
         </div>
      </>
   );
};

export default Cart;
