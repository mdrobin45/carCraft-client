const SliderTemplate = ({ ads }) => {
   const { discount, carModel, description, image } = ads;
   return (
      <div
         style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://live.themewild.com/motex/assets/img/slider/slider-3.jpg')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }}>
         <div className="flex pb-10 flex-col-reverse lg:flex-row lg:h-[85vh] pt-20 px-4 md:px-6 lg:px-10 items-center justify-between">
            <div className="w-full lg:w-2/4 md:pt-10 lg:pt-0 text-center lg:text-left">
               <h1
                  style={{ lineHeight: "4.5rem" }}
                  data-aos="fade-in"
                  data-aos-duration="800"
                  className="text-white hidden md:block md:pt-4 text-3xl md:text-4xl lg:text-6xl font-bold font-inter">
                  Get <span className="text-primary">{discount}%</span> Off{" "}
                  {carModel}!
               </h1>
               <h1
                  data-aos="fade-in"
                  data-aos-duration="800"
                  className="text-white md:hidden md:pt-4 text-3xl md:text-4xl lg:text-6xl font-bold font-inter">
                  Get <span className="text-primary">{discount}%</span> Off{" "}
                  {carModel}!
               </h1>
               <p
                  data-aos="fade-in"
                  data-aos-duration="800"
                  className="my-4 text-white md:pr-20">
                  {description}
               </p>
            </div>

            <div className="w-full lg:w-2/4">
               <img
                  data-aos="fade-left"
                  data-aos-duration="800"
                  className="w-full md:mx-auto ml-auto"
                  src={image}
                  alt="Hero Image"
               />
            </div>
         </div>
      </div>
   );
};

export default SliderTemplate;
