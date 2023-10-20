import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/Header/MobileHeader/MobileHeader";
import TopHeader from "../Components/TopHeader/TopHeader";

const Root = () => {
   return (
      <div>
         <MobileHeader />
         <TopHeader />
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;
