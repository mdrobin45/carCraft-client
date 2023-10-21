import { motion } from "framer-motion";
import { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Header/MobileHeader/MobileHeader";
import TopHeader from "../Components/TopHeader/TopHeader";
import { DarkContext } from "../MyContext/ThemeContextProvider";

const Root = () => {
   const { isDark } = useContext(DarkContext);
   const { pathname } = useLocation();
   return (
      <div className={isDark ? "bg-black dark" : "bg-white"}>
         <MobileHeader />
         <TopHeader />
         <Header />
         <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Outlet />
         </motion.div>
         <Footer />
      </div>
   );
};

export default Root;
