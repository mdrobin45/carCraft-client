import { useState } from "react";
import Logo from "./Logo/Logo";
import MenuLinks from "./MenuLinks/MenuLinks";
import NavButtons from "./NavButtons/NavButtons";

const Header = () => {
   const [expandMobileMenu, setExpandMobileMenu] = useState(false);

   // handle mobile hamburger icon click
   const hamburgerClick = () => {
      setExpandMobileMenu(!expandMobileMenu);
   };
   return (
      <nav className="pt-3 px-4 md:px-6 lg:px-10 py-4 w-full z-20 top-0 left-0">
         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center gap-20">
               <Logo />
               <MenuLinks mobileExpand={expandMobileMenu} />
            </div>

            <NavButtons expandBtnClick={hamburgerClick} />
         </div>
      </nav>
   );
};

export default Header;
