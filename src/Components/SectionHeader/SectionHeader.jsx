import { motion } from "framer-motion";
import { BsFillCarFrontFill } from "react-icons/bs";

const SectionHeader = ({ title, subTitle, highlight }) => {
   return (
      <div className="flex flex-col items-center justify-center py-10 gap-2">
         <motion.h3
            initial={{ opacity: 0, marginLeft: "20px" }}
            whileInView={{ opacity: 1, marginLeft: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-md flex items-center gap-2 tracking-widest text-primary font-semibold font-inter">
            <BsFillCarFrontFill className="text-xl" /> {subTitle}
         </motion.h3>
         <motion.h2
            initial={{ opacity: 0, marginLeft: "20px" }}
            whileInView={{ opacity: 1, marginLeft: "0" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl text-center md:text-left dark:text-gray-200 md:text-3xl lg:text-4xl font-bold font-inter uppercase">
            {title} <span className="text-primary">{highlight}</span>
         </motion.h2>
      </div>
   );
};

export default SectionHeader;
