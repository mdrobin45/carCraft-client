import { useLoaderData } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import LeftSide from "../../Components/SingleProduct/LeftSide";
import SiteTitle from "../../SiteTitle/SiteTitle";

const SingleProduct = () => {
   const car = useLoaderData();
   console.log(car);
   return (
      <div className="bg-[#F9F9F9]">
         <SiteTitle>Single Product</SiteTitle>
         <PageHeader title="Single Product" />
         <div className="flex px-4 md:px-6 lg:px-10 justify-between">
            <LeftSide car={car} />
         </div>
      </div>
   );
};

export default SingleProduct;
