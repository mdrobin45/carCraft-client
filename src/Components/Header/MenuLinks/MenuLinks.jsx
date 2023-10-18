import LinkItem from "./LinkItem";
import "./style.css";

const MenuLinks = ({ mobileExpand }) => {
   return (
      <div
         className={`items-center justify-between ${
            !mobileExpand ? "hidden" : ""
         } w-full md:flex md:w-auto md:order-1`}>
         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <LinkItem to="/" linkText="Home" />
            <LinkItem to="/about" linkText="About" />
            <LinkItem to="/contact" linkText="Contact" />
            <LinkItem to="/cars" linkText="Cars" />
         </ul>
      </div>
   );
};

export default MenuLinks;
