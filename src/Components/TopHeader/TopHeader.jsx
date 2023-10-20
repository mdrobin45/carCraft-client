import { useContext } from "react";
import {
   BiLogInCircle,
   BiLogoFacebookCircle,
   BiSolidPhoneCall,
   BiUser,
} from "react-icons/bi";
import { BsEnvelopeFill, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../MyContext/AuthContextProvider";

const TopHeader = () => {
   const { user } = useContext(AuthContext);
   return (
      <section className="md:flex hidden items-center justify-between bg-black px-4 md:px-6 lg:px-10 py-4">
         <div>
            <ul className="flex items-center gap-3">
               <li className="flex items-center gap-2">
                  <BsEnvelopeFill className="text-primary text-lg" />
                  <p className="text-white">robin4500bd@gmail.com</p>
               </li>
               <li className="flex items-center gap-2">
                  <BiSolidPhoneCall className="text-primary text-xl" />
                  <p className="text-white">+2 123 654 7898</p>
               </li>
            </ul>
         </div>
         <div>
            <ul className="flex items-center gap-3">
               {!user && (
                  <>
                     <li>
                        <Link className="flex items-center gap-2" to="/login">
                           <BiLogInCircle className="text-primary text-xl" />
                           <p className="text-white hover:text-primary transition-all">
                              Login
                           </p>
                        </Link>
                     </li>
                     <li className="pr-7">
                        <Link
                           className="flex items-center gap-2"
                           to="/register">
                           <BiUser className="text-primary text-xl" />
                           <p className="text-white hover:text-primary transition-all">
                              Register
                           </p>
                        </Link>
                     </li>
                  </>
               )}

               <ul className="flex items-center gap-2">
                  <li className="text-white mt-1">Follow Us: </li>
                  <li className="text-white flex items-center gap-3">
                     <a href="#">
                        <BiLogoFacebookCircle className="text-white text-2xl" />
                     </a>
                     <a href="#">
                        <BsTwitter className="text-white text-2xl" />
                     </a>
                     <a href="#">
                        <BsInstagram className="text-white text-xl" />
                     </a>
                  </li>
               </ul>
            </ul>
         </div>
      </section>
   );
};

export default TopHeader;
