import { BiSolidPhoneCall } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import whiteLogo from "../../assets/images/white-logo.svg";

const Footer = () => {
   return (
      <section className="bg-black py-20">
         <div className="flex flex-col md:flex-row justify-between px-4 md:px-6 lg:px-10">
            <div className=" md:w-1/3">
               <Link to="/" className="flex items-center">
                  <img className="w-16" src={whiteLogo} alt="Logo" />
                  <h2 className="text-4xl text-white font-bol">
                     Car<span className="text-primary">C</span>raft
                  </h2>
               </Link>
               <p className="text-white py-4">
                  We are many variations of passages available but the majority
                  have suffered alteration in some form by injected humour words
                  believable.
               </p>
               <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2">
                     <BsEnvelopeFill className="text-primary text-lg" />
                     <p className="text-white">robin4500bd@gmail.com</p>
                  </li>
                  <li className="flex items-center gap-2">
                     <BiSolidPhoneCall className="text-primary text-xl" />
                     <p className="text-white">+2 123 654 7898</p>
                  </li>
                  <li className="flex items-center gap-2">
                     <FiMapPin className="text-primary text-xl" />
                     <p className="text-white">25/B Milford Road, New York</p>
                  </li>
               </ul>
            </div>
            <div className="md:w-1/3 pt-6 md:pt-0  flex md:justify-evenly">
               <div>
                  <h2 className="mb-6 font-inter text-2xl md:text-md font-semibold text-primary dark:text-white">
                     Quick Links
                  </h2>
                  <ul className="text-gray-100 dark:text-gray-400 font-medium">
                     <li className="mb-2">
                        <Link to="/home" className="hover:underline">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link to="/about" className="hover:underline">
                           About
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" className="hover:underline">
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="md:w-1/3 pt-6 md:pt-0 flex md:justify-evenly">
               <div>
                  <h2 className="mb-6 font-inter text-2xl md:text-md font-semibold text-primary dark:text-white">
                     Newsletter
                  </h2>
                  <p className="text-white">
                     Subscribe Our Newsletter To Get Latest Update And News
                  </p>
                  <div>
                     <form className="w-full">
                        <label
                           htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                           Your Email
                        </label>
                        <input
                           type="text"
                           id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                           placeholder="Enter email"
                           required
                        />
                        <button
                           type="submit"
                           className="text-white mt-4 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full block sm:w-auto px-5 py-2.5 text-center">
                           Submit
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
