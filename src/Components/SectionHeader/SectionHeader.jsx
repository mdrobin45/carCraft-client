import { BsFillCarFrontFill } from "react-icons/bs";

const SectionHeader = ({ title, subTitle, highlight }) => {
   return (
      <div className="flex flex-col items-center justify-center py-10 gap-2">
         <h3
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-md flex items-center gap-2 tracking-widest text-primary font-semibold font-inter">
            <BsFillCarFrontFill className="text-xl" /> {subTitle}
         </h3>
         <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-3xl md:text-3xl lg:text-4xl font-bold font-inter uppercase">
            {title} <span className="text-primary">{highlight}</span>
         </h2>
      </div>
   );
};

export default SectionHeader;
