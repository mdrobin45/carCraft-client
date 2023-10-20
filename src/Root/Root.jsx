import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Header/MobileHeader/MobileHeader";
import TopHeader from "../Components/TopHeader/TopHeader";
import { DarkContext } from "../MyContext/ThemeContextProvider";

const Root = () => {
   const { isDark } = useContext(DarkContext);
   return (
      <div className={isDark ? "bg-black dark" : "bg-white"}>
         <MobileHeader />
         <TopHeader />
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;
