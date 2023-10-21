import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ProductCard from "../../../Pages/BrandArchive/ProductCard";
import SectionHeader from "../../SectionHeader/SectionHeader";

const LatestCar = () => {
   const [cars, setCars] = useState([]);

   // Fetch advertisement
   useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_API}/cars`)
         .then((res) => res.json())
         .then((data) => setCars(data));
   }, []);

   const sliceCar = cars.slice(0, 8);
   return (
      <>
         <SectionHeader
            title="Let's Check Latest"
            highlight="Cars"
            subTitle="NEW ARRIVALS"
         />
         {sliceCar.length ? (
            <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {sliceCar.map((car) => (
                  <ProductCard key={car._id} car={car} />
               ))}
            </div>
         ) : (
            <div className="h-screen flex flex-col items-center justify-center">
               <ClipLoader color="#EF1D26" />
            </div>
         )}
      </>
   );
};

export default LatestCar;
