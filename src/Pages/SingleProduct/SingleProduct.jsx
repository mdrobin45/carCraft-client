import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
   const car = useLoaderData();
   console.log(car);
   return (
      <div>
         <h2>Single product</h2>
      </div>
   );
};

export default SingleProduct;
