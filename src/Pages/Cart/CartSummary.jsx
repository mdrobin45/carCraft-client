const CartSummary = () => {
   return (
      <div className="mt-6 h-full rounded-lg border bg-white dark:bg-gray-700 p-6 shadow-md md:mt-0 md:w-1/3">
         <div className="mb-2 flex justify-between">
            <p className="text-gray-700 dark:text-gray-200">Subtotal</p>
            <p className="text-gray-700 dark:text-gray-200">$129.99</p>
         </div>
         <div className="flex justify-between">
            <p className="text-gray-700 dark:text-gray-200">Shipping</p>
            <p className="text-gray-700 dark:text-gray-200">$4.99</p>
         </div>
         <hr className="my-4" />
         <div className="flex justify-between">
            <p className="text-lg font-bold dark:text-gray-200">Total</p>
            <div className="">
               <p className="mb-1 text-lg font-bold dark:text-gray-200">
                  $134.98 USD
               </p>
               <p className="text-sm text-gray-700 dark:text-gray-200">
                  including VAT
               </p>
            </div>
         </div>
         <button className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50">
            Check out
         </button>
      </div>
   );
};

export default CartSummary;
