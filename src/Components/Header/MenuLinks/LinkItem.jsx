import { NavLink } from "react-router-dom";

const LinkItem = ({ to, linkText }) => {
   return (
      <li>
         <NavLink
            to={`${to}`}
            className={`block py-2 pl-3 pr-4 font-barlow hover:text-primary rounded md:bg-transparent md:p-0 dark:text-white`}>
            {linkText}
         </NavLink>
      </li>
   );
};

export default LinkItem;
