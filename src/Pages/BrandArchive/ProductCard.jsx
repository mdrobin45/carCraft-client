import { useEffect, useState } from "react";
import { AiOutlineBgColors } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { BsCarFront, BsFuelPumpFill, BsTruckFlatbed } from "react-icons/bs";
import { RiSteering2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProductCard = ({ car }) => {
   const [brandName, setBrandName] = useState([]);
   const {
      _id,
      name,
      rating,
      driveType,
      brand,
      photo,
      fuelType,
      color,
      price,
      transmission,
      bodyType,
   } = car;

   // Fetch brand name
   useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_API}/brands/${brand}`)
         .then((res) => res.json())
         .then((data) => setBrandName(data.name));
   }, [brand]);

   return (
      <div
         data-aos="fade-up"
         data-aos-duration="800"
         className="relative flex w-full md:max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
         <div className="relative m-0 overflow-hidden rounded-md bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img
               className=" hover:scale-[1.1] transition-all"
               src={photo}
               alt="ui/ux review check"
            />
         </div>
         <div className="p-3">
            <div className="flex items-center justify-between space-x-1">
               <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                     <svg
                        className="w-4 h-4 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                     </svg>
                  </div>
                  <p>({rating})</p>
               </div>
               <p className="flex items-center gap-1 font-bold text-primary text-xl">
                  ${price}
               </p>
            </div>
            <h4 className="block pt-2 font-barlow text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
               {name}
            </h4>
            <div className="grid pb-2 grid-cols-1 my-3 md:grid-cols-3 gap-3">
               <p className="flex items-center gap-2 text-sm">
                  <BsCarFront className="text-primary text-md" />
                  {brandName}
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <BsTruckFlatbed className="text-primary text-xl" />
                  {bodyType}
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <RiSteering2Line className="text-primary text-xl" />
                  {driveType}
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <BiTransferAlt className="text-primary text-md" />
                  {transmission}
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <BsFuelPumpFill className="text-primary text-md" />
                  {fuelType}
               </p>
               <p className="flex items-center gap-2 text-sm">
                  <AiOutlineBgColors className="text-primary text-md" />
                  {color}
               </p>
            </div>
            <hr />
         </div>
         <div className="flex pt-2 items-center justify-between pb-6 px-3">
            <Link
               to={`/single-product/${_id}`}
               className="inline-flex items-center gap-2 middle none border-2 border-primary mr-7 hover:bg-black hover:text-white uppercase hover:border-black center mb-2 rounded-lg bg-primary py-1 md:py-2 px-2 md:px-6 font-inter text-md text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
               Details
            </Link>
            <Link
               to={`/update/${_id}`}
               className="inline-flex items-center gap-2 middle none border-2 border-primary hover:bg-black hover:text-white uppercase hover:border-black center mb-2 rounded-lg bg-primary py-1 md:py-2 px-2 md:px-6 font-inter text-md text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
               Update
            </Link>
         </div>
      </div>
   );
};

export default ProductCard;
