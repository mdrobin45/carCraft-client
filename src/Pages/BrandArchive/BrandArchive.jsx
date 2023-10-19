import { useLoaderData, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SiteTitle from "../../SiteTitle/SiteTitle";
// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import EmptyPage from "../../Components/EmptyPage/EmptyPage";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import ProductCard from "./ProductCard";
import SliderTemplate from "./SliderTemplate/SliderTemplate";

const BrandArchive = () => {
   const [advertisement, setAdvertisement] = useState([]);
   const cars = useLoaderData();
   const { id } = useParams();

   // Fetch advertisement
   useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_API}/advertisement`)
         .then((res) => res.json())
         .then((data) => setAdvertisement(data));
   }, []);

   // Filter ads with brand
   const filteredAds = advertisement.filter((ads) => ads.brandId === id);

   // Car filtered by brand id
   const filteredCars = cars.filter((car) => car.brand === id);

   return (
      <div className="pb-20">
         <SiteTitle>Brand Archive</SiteTitle>
         {filteredCars.length ? (
            <div>
               <Swiper pagination={true} modules={[Pagination]}>
                  {filteredAds.map((ads) => (
                     <SwiperSlide key={ads._id}>
                        <SliderTemplate ads={ads} />
                     </SwiperSlide>
                  ))}
               </Swiper>
               <section>
                  <div className="px-7 md:px-10 lg:px-20">
                     <SectionHeader
                        title="Brand Cars"
                        subTitle="Cars by Brand"
                     />
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredCars.map((car) => (
                           <ProductCard key={car._id} car={car} />
                        ))}
                     </div>
                  </div>
               </section>
            </div>
         ) : (
            <EmptyPage />
         )}
      </div>
   );
};

export default BrandArchive;
