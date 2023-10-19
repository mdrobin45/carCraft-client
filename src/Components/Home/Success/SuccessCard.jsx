const SuccessCard = ({ children, title, count }) => {
   return (
      <div className="flex flex-col items-center justify-center">
         <div className=" border-4 rounded-full p-4 my-3 border-white bg-black">
            {children}
         </div>
         <h2 className="text-4xl font-inter font-bold text-white">{count}</h2>
         <h4 className="text-2xl font-inter font-semibold text-white mt-3">
            {title}
         </h4>
      </div>
   );
};

export default SuccessCard;
