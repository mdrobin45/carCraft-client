import { BsCalendarEvent } from "react-icons/bs";
import bannerImage from "../../../assets/images/hero-figure1.png";

const Banner = () => {
   return (
      <div className="flex pb-0 md:pb-10 flex-col-reverse lg:flex-row lg:h-screen px-7 md:px-16 lg:px-20 items-center justify-between">
         <div className="w-full lg:w-2/4 md:pt-10 lg:pt-0 text-center lg:text-left">
            <div className="flex mt-10 md:mt-0 pb-2 md:pb-0 items-center justify-center lg:justify-start gap-3">
               <BsCalendarEvent className="text-lg" />
               <h3
                  data-aos="fade-in"
                  className="text-primary text-md md:text-xl font-semibold">
                  October 22, 2023
               </h3>
            </div>
            <h1
               data-aos="fade-in"
               data-aos-duration="800"
               className="text-3xl md:text-4xl lg:text-6xl uppercase font-bold leading-tight font-barlow">
               Leadership Insight <br /> &{" "}
               <span className="text-primary">Conference</span>
            </h1>
            <p data-aos="fade-in" data-aos-duration="800" className="my-4">
               Step into the world of endless opportunities and networking
               excellence at Business Meetups and Conferences. Join us in
               shaping the future of business together
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start md:gap-10">
               <button
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  type="button"
                  className="middle w-full md:w-[132px] none border-2 border-primary hover:bg-transparent hover:border-primary center mb-2 rounded-lg bg-primary hover:text-primary py-2 font-semibold px-6 font-barlow text-lg text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  to="/login"
                  data-ripple-light="true">
                  <span>Book Now</span>
               </button>
               <button
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  type="button"
                  className="middle w-full md:w-[170px] none border-2 bg-transparent border-primary center mb-2 rounded-lg hover:bg-primary hover:text-white bg-primary text-primary py-2 font-semibold px-6 font-barlow text-lg shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  to="/login"
                  data-ripple-light="true">
                  <span>View Details</span>
               </button>
            </div>
         </div>

         <div className="w-full lg:w-2/4">
            <img
               data-aos="fade-left"
               data-aos-duration="800"
               className="w-full md:w-2/4 md:mx-auto lg:w-4/5 ml-auto"
               src={bannerImage}
               alt="Hero Image"
            />
         </div>
      </div>
   );
};

export default Banner;
