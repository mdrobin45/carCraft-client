import bannerImage from "../../../assets/images/hero-1.png";
import bgImage from "../../../assets/images/slider-3.jpg";
import Button from "../../Buttons/Button";

const Banner = () => {
   return (
      <div
         style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }}>
         <div className="flex pb-10 flex-col-reverse lg:flex-row lg:h-[85vh] pt-20 px-4 md:px-6 lg:px-10 items-center justify-between">
            <div className="w-full lg:w-2/4 md:pt-10 lg:pt-0 text-center lg:text-left">
               <div className="flex mt-10 md:mt-0 pb-2 md:pb-0 items-center justify-center lg:justify-start gap-3">
                  <h3
                     data-aos="fade-in"
                     className="text-primary tracking-widest uppercase text-sm md:text-xl font-semibold">
                     Welcome to CarCraft
                  </h3>
               </div>
               <h1
                  style={{ lineHeight: "4.5rem" }}
                  className="text-white hidden md:block md:pt-4 text-3xl md:text-4xl lg:text-6xl font-bold font-inter">
                  Best Way To Find Your{" "}
                  <span className="text-primary">Dream</span> Car
               </h1>
               <h1
                  data-aos="fade-in"
                  data-aos-duration="800"
                  className="text-white md:hidden md:pt-4 text-3xl md:text-4xl lg:text-6xl font-bold font-inter">
                  Best Way To Find Your{" "}
                  <span className="text-primary">Dream</span> Car
               </h1>
               <p
                  data-aos="fade-in"
                  data-aos-duration="800"
                  className="my-4 text-white md:pr-20">
                  Step into the world of endless opportunities and networking
                  excellence at Business Meetups and Conferences. Join us in
                  shaping the future of business together
               </p>
               <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start">
                  <Button
                     to="/about"
                     btnText="Read More"
                     iconPosition="right"></Button>
               </div>
            </div>

            <div className="w-full lg:w-2/4">
               <img
                  data-aos="fade-left"
                  data-aos-duration="800"
                  className="w-full md:mx-auto ml-auto"
                  src={bannerImage}
                  alt="Hero Image"
               />
            </div>
         </div>
      </div>
   );
};

export default Banner;
