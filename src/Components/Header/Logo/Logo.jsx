import { Link } from "react-router-dom";

const Logo = () => {
   return (
      <div className="w-44">
         <Link to="/" className="flex items-center gap-3">
            <img
               className="w-48"
               src="https://live.themewild.com/motex/assets/img/logo/logo.png"
               alt="Logo"
            />
         </Link>
      </div>
   );
};

export default Logo;
