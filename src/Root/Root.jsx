import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import TopHeader from "../Components/TopHeader/TopHeader";

const Root = () => {
   return (
      <div>
         <TopHeader />
         <Header />
         <Outlet />
      </div>
   );
};

export default Root;
