import { Link } from "react-router-dom";
import errorImg from "../../assets/images/404.svg";

const PageNotFound = () => {
   return (
      <div className="flex h-screen flex-col items-center justify-center">
         <img className="w-2/4" src={errorImg} alt="Page not found" />
         <Link
            to="/"
            className="middle none border-2 border-primary hover:border-primary center mb-2 rounded-lg bg-primary py-2 font-semibold px-6 font-barlow text-lg text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <span>Back to Home</span>
         </Link>
      </div>
   );
};

export default PageNotFound;
