import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../../SectionHeader/SectionHeader";

const PopularBrands = () => {
   const [brands, setBrands] = useState([]);

   // Fetch brands
   useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_API}/brands`)
         .then((res) => res.json())
         .then((data) => setBrands(data));
   }, []);

   return (
      <>
         <section className="px-4 md:px-6 lg:px-10">
            <SectionHeader
               title="Our Top Quality"
               highlight="Brands"
               subTitle="POPULAR BRANDS"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-10 pb-20">
               {brands.map((brand) => (
                  <Link to={`/brand-archive/${brand._id}`} key={brand._id}>
                     <div className="text-center bg-[#F9F9F9] rounded-xl p-2">
                        <img
                           className=" w-40 mx-auto"
                           src={brand.image}
                           alt={brand.name}
                        />
                        <h3 className="text-xl font-inter font-bold">
                           {brand.name}
                        </h3>
                     </div>
                  </Link>
               ))}
            </div>
         </section>
      </>
   );
};

export default PopularBrands;
