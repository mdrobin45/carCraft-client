import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillCarFrontFill } from "react-icons/bs";

const About = () => {
   return (
      <div className="flex pt-10  md:py-20 flex-col md:flex-row items-center justify-between gap-20 px-4 md:px-6 lg:px-10">
         <div className="md:w-2/4">
            <div>
               <motion.img
                  initial={{ opacity: 0, marginLeft: "-50px" }}
                  whileInView={{ opacity: 1, marginLeft: "0" }}
                  transition={{ duration: 0.5, delay: 0 }}
                  viewport={{ once: true }}
                  src="https://live.themewild.com/motex/assets/img/about/01.png"
                  alt=""
               />
            </div>
         </div>
         <div className="md:w-2/4">
            <motion.h3
               initial={{ opacity: 0, marginLeft: "20px" }}
               whileInView={{ opacity: 1, marginLeft: "0" }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="text-md uppercase flex items-center gap-2 tracking-widest text-primary font-semibold font-inter">
               <BsFillCarFrontFill className="text-xl" /> About Us
            </motion.h3>
            <motion.h2
               initial={{ opacity: 0, marginLeft: "20px" }}
               whileInView={{ opacity: 1, marginLeft: "0" }}
               transition={{ duration: 0.5, delay: 0.2 }}
               viewport={{ once: true }}
               className="text-3xl mt-2 dark:text-gray-200 md:text-3xl lg:text-4xl font-bold font-inter uppercase">
               World Largest{" "}
               <span className="text-primary">Car Dealer Marketplace</span>
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, marginLeft: "20px" }}
               whileInView={{ opacity: 1, marginLeft: "0" }}
               transition={{ duration: 0.5, delay: 0.4 }}
               viewport={{ once: true }}
               className="pt-4 dark:text-gray-200">
               There are many variations of passages of Lorem Ipsum available,
               but the majority have suffered alteration in some form, by
               injected humour.
            </motion.p>
            <motion.div
               initial={{ opacity: 0, marginLeft: "20px" }}
               whileInView={{ opacity: 1, marginLeft: "0" }}
               transition={{ duration: 0.5, delay: 0.6 }}
               viewport={{ once: true }}
               className="flex items-center mt-4 my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, marginLeft: "20px" }}
               whileInView={{ opacity: 1, marginLeft: "0" }}
               transition={{ duration: 0.5, delay: 0.8 }}
               viewport={{ once: true }}
               className="flex items-center my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, marginLeft: "20px" }}
               whileInView={{ opacity: 1, marginLeft: "0" }}
               transition={{ duration: 0.5, delay: 1 }}
               viewport={{ once: true }}
               className="flex items-center my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, marginLeft: "20px" }}
               whileInView={{ opacity: 1, marginLeft: "0" }}
               transition={{ duration: 0.5, delay: 1.2 }}
               viewport={{ once: true }}
               className="flex items-center my-3 gap-3">
               <AiOutlineCheckCircle className="text-primary text-xl" />{" "}
               <p className="dark:text-gray-200">
                  At vero eos et accusamus et iusto odio.
               </p>
            </motion.div>
         </div>
      </div>
   );
};

export default About;
