import { Link } from "react-router-dom";

const Button = ({ children, to, btnText, iconPosition }) => {
   return (
      <Link
         to={to}
         className="w-2/4 md:w-[inherit] items-center gap-2 middle none border-2 border-primary mr-7 hover:bg-black hover:text-white uppercase hover:border-black center mb-2 rounded-lg bg-primary py-1 md:py-2 font-inter md:px-6 text-md text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
         {iconPosition === "right" ? (
            <>
               {btnText}
               {children}
            </>
         ) : (
            <>
               {children}
               {btnText}
            </>
         )}
      </Link>
   );
};

export default Button;
