import { useContext } from "react";
import { AuthContext } from "../../MyContext/AuthContextProvider";
import KeyInfo from "./KeyInfo";

const LeftSide = ({ car }) => {
   const { name, photo, description, price } = car;
   const { user } = useContext(AuthContext);
   const uid = user.uid;

   // Handle add to cart
   const handleAddToCart = () => {
      const carObj = { name, photo, uid, price, quantity: 1 };
      fetch(`${import.meta.env.VITE_SERVER_API}/cart`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(carObj),
      })
         .then((res) => res.json())
         .then((data) => console.log(data));
   };
   return (
      <div className=" w-2/3 mx-auto my-20">
         <div className="my-4 bg-white p-4 rounded-md">
            <div className="flex items-center justify-between mb-4">
               <h2 className="text-4xl py-3 font-bold font-inter">{name}</h2>
               <button
                  onClick={handleAddToCart}
                  className="inline-flex items-center gap-2 middle none border-2 border-primary mr-7 hover:bg-black hover:text-white uppercase hover:border-black center mb-2 rounded-lg bg-primary py-1 md:py-2 px-2 md:px-6 font-inter text-md text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Add to Card
               </button>
            </div>
            <h2 className="text-2xl font-bold text-primary pb-2">
               Price: ${price}
            </h2>
            <img className="w-full rounded-md" src={photo} alt="Car" />
         </div>

         <div className="p-4 mt-6 bg-white rounded-md px-4 md:px-6 lg:px-10">
            <h2 className="text-2xl py-3 font-bold font-inter">
               Key Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
            </div>
         </div>
         <div className="p-4 mt-6 bg-white shadow-md rounded-md px-4 md:px-6 lg:px-10">
            <h2 className="text-2xl py-3 font-bold font-inter">Description</h2>
            <p>{description}</p>
         </div>
      </div>
   );
};

export default LeftSide;
