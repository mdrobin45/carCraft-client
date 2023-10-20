import { useContext, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { AuthContext } from "../../../MyContext/AuthContextProvider";
import { DarkContext } from "../../../MyContext/ThemeContextProvider";
import Button from "../../Buttons/Button";
import UserDropdown from "./UserDropdown";

const NavButtons = ({ expandBtnClick }) => {
   const [expandProfile, setExpandProfile] = useState(false);
   const { user } = useContext(AuthContext);
   const { isDark, setIsDark } = useContext(DarkContext);

   // Toggle user profile dropdown
   const handleProfileExpand = () => {
      setExpandProfile(!expandProfile);
   };
   return (
      <div className="flex items-center relative gap-4 md:gap-0 md:order-2">
         <DarkModeToggle
            className="mr-4"
            onChange={setIsDark}
            checked={isDark}
         />
         <div className="hidden lg:block ml-4">
            <Button to="/add-product" btnText="Add Product"></Button>
         </div>

         {user && (
            <>
               <img
                  onClick={handleProfileExpand}
                  type="button"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                  src={
                     user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/238dYyx/user.png"
                  }
                  alt="User"
               />
               <UserDropdown expandProfile={expandProfile} />
            </>
         )}
         {/* Hamburger for mobile */}
         <button
            onClick={expandBtnClick}
            type="button"
            className="inline-flex items-center bg-white p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <svg
               className="w-5 h-5"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 17 14">
               <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
               />
            </svg>
         </button>
      </div>
   );
};

export default NavButtons;
