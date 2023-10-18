import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import TopHeader from "../Components/TopHeader/TopHeader";

const Root = () => {
   return (
      <div>
         <TopHeader />
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;
