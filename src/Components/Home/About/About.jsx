import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";

const About = () => {
   return (
      <div className="flex pt-10  md:py-20 flex-col md:flex-row items-center justify-between gap-20 px-4 md:px-6 lg:px-10">
         <div className="md:w-2/4">
            <img
               src="https://live.themewild.com/motex/assets/img/about/01.png"
               alt=""
            />
         </div>
         <div className="md:w-2/4">
            <h3
               data-aos="fade-up"
               data-aos-duration="800"
               className="text-md uppercase flex items-center gap-2 tracking-widest text-primary font-semibold font-inter">
               <BsFillCarFrontFill className="text-xl" /> About Us
            </h3>
            <h2
               data-aos="fade-up"
               data-aos-delay="200"
               data-aos-duration="800"
               className="text-3xl mt-2 dark:text-gray-200 md:text-3xl lg:text-4xl font-bold font-inter uppercase">
               World Largest{" "}
               <span className="text-primary">Car Dealer Marketplace</span>
            </h2>
            <p className="pt-4 dark:text-gray-200">
               There are many variations of passages of Lorem Ipsum available,
               but the majority have suffered alteration in some form, by
               injected humour.
            </p>
            <div className="flex items-center mt-4 my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </div>
            <div className="flex items-center my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </div>
            <div className="flex items-center my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </div>
            <div className="flex items-center my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </div>
         </div>
      </div>
   );
};

export default About;
