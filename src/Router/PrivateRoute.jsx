import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../MyContext/AuthContextProvider";

const PrivateRoute = ({ children }) => {
   const { isLoading, user } = useContext(AuthContext);
   const location = useLocation();

   if (isLoading) {
      return (
         <div className="h-screen flex flex-col items-center justify-center">
            <ClipLoader color="#EF1D26" />
         </div>
      );
   }

   if (!user) {
      return <Navigate to="/login" state={{ prevUrl: location.pathname }} />;
   }
   return children;
};

export default PrivateRoute;
