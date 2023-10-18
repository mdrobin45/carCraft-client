import { Link } from "react-router-dom";

const FormFooter = ({ linkComment, linkUrl, linkText }) => {
   return (
      <div className="p-2 md:p-6 pt-0">
         <p className=" flex justify-center text-sm font-light leading-normal text-inherit antialiased">
            {linkComment}
            <Link
               to={linkUrl}
               className="ml-1 block font-semibold text-sm leading-normal text-primary antialiased">
               {linkText}
            </Link>
         </p>
      </div>
   );
};

export default FormFooter;
