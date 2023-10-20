import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../MyContext/AuthContextProvider";
import LinkItem from "../MenuLinks/LinkItem";

const MobileHeader = () => {
   const [showMenu, setShowMenu] = useState(false);
   const { user, logOut } = useContext(AuthContext);

   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         toast.error("Your are logged out!");
      });
   };

   return (
      <>
         <nav className="relative md:hidden px-4 py-4 flex justify-between items-center bg-white">
            <Link to="/" className="text-3xl font-bold leading-none">
               <img
                  className="w-52"
                  src="https://live.themewild.com/motex/assets/img/logo/logo.png"
                  alt="Logo"
               />
            </Link>
            <div className="lg:hidden">
               <button
                  onClick={() => {
                     setShowMenu(!showMenu);
                  }}
                  className="navbar-burger flex items-center text-primary p-3">
                  <svg
                     className="block h-6 w-6 fill-current"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                     <title>Mobile menu</title>
                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
               </button>
            </div>
         </nav>
         <div
            className={`navbar-menu transition-all relative z-50 ${
               !showMenu && "hidden"
            }`}>
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
               <div className="flex items-center mb-8">
                  <a
                     className="mr-auto text-3xl font-bold leading-none"
                     href="#">
                     <img
                        className=" w-40"
                        src="https://live.themewild.com/motex/assets/img/logo/logo.png"
                        alt="Logo"
                     />
                  </a>
                  <button
                     onClick={() => {
                        setShowMenu(!showMenu);
                     }}
                     className="navbar-close">
                     <svg
                        className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M6 18L18 6M6 6l12 12"></path>
                     </svg>
                  </button>
               </div>
               <div>
                  <ul
                     onClick={() => {
                        setShowMenu(!showMenu);
                     }}>
                     <LinkItem to="/" linkText="Home" />
                     <LinkItem to="/about" linkText="About" />
                     <LinkItem to="/contact" linkText="Contact" />
                  </ul>

                  {user && (
                     <>
                        <hr />
                        <ul
                           onClick={() => {
                              setShowMenu(!showMenu);
                           }}>
                           <LinkItem to="/add-product" linkText="Add Product" />
                           <LinkItem to="/cart" linkText="My Cart" />
                        </ul>
                     </>
                  )}
               </div>
               <hr />
               {user ? (
                  <>
                     <div className="pt-6 flex items-center gap-3">
                        <img
                           className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                           src={
                              user
                                 ? user.photoURL
                                 : "https://i.ibb.co/238dYyx/user.png"
                           }
                           alt="Bordered avatar"
                        />
                        <div>
                           <h3 className="font-bold">
                              {user ? user.displayName : "No name"}
                           </h3>
                           <p>{user ? user.email : "example@gmail.com"}</p>
                        </div>
                     </div>
                     <button
                        onClick={handleLogOut}
                        className="block mt-4 px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary  rounded-xl">
                        Logout
                     </button>
                  </>
               ) : (
                  <div className="pt-6">
                     <Link
                        onClick={() => {
                           setShowMenu(!showMenu);
                        }}
                        to="/login"
                        className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">
                        Login
                     </Link>
                     <Link
                        onClick={() => {
                           setShowMenu(!showMenu);
                        }}
                        to="/register"
                        className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary  rounded-xl">
                        Register
                     </Link>
                  </div>
               )}
               <div className="mt-auto">
                  <p className="text-xs text-center text-gray-400">
                     <span>Copyright © 2023</span>
                  </p>
               </div>
            </nav>
         </div>
      </>
   );
};

export default MobileHeader;
