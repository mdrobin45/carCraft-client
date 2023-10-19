import { BiSolidPhoneCall } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
   return (
      <section className="bg-black py-20">
         <div className="flex justify-between px-4 md:px-6 lg:px-10">
            <div className=" w-1/3">
               <img
                  className="w-44"
                  src="https://live.themewild.com/motex/assets/img/logo/logo-light.png"
                  alt=""
               />
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
            <div className="w-1/3 flex justify-evenly">
               <div>
                  <h2 className="mb-6 font-inter text-md font-semibold text-white dark:text-white">
                     Quick Links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                     <li className="mb-2">
                        <a
                           href="https://flowbite.com/"
                           className="hover:underline">
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://tailwindcss.com/"
                           className="hover:underline">
                           About
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://tailwindcss.com/"
                           className="hover:underline">
                           Contact Us
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://tailwindcss.com/"
                           className="hover:underline">
                           Cars
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="w-1/3 flex justify-evenly">
               <div>
                  <h2 className="mb-6 font-inter text-md font-semibold text-white dark:text-white">
                     Supports
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                     <li className="mb-2">
                        <a
                           href="https://flowbite.com/"
                           className="hover:underline">
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://tailwindcss.com/"
                           className="hover:underline">
                           About
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://tailwindcss.com/"
                           className="hover:underline">
                           Contact Us
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://tailwindcss.com/"
                           className="hover:underline">
                           Cars
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="w-1/3 flex justify-evenly">
               <div>
                  <h2 className="mb-6 font-inter text-md font-semibold text-white dark:text-white">
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
