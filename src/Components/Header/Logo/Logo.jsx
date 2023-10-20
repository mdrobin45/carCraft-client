import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../../../MyContext/ThemeContextProvider";
import darkLogo from "../../../assets/images/dark-logo.svg";
import whiteLogo from "../../../assets/images/white-logo.svg";

const Logo = () => {
   const { isDark } = useContext(DarkContext);
   return (
      <div className="w-44">
         <Link to="/" className="flex items-center">
            <img
               className="w-16"
               src={isDark ? whiteLogo : darkLogo}
               alt="Logo"
            />
            <h2 className="text-4xl text-gray-900 font-bold dark:text-white">
               Car<span className="text-primary">C</span>raft
            </h2>
         </Link>
      </div>
   );
};

export default Logo;
