import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../MyContext/AuthContextProvider";

const UserDropdown = ({ expandProfile }) => {
   const { user, logOut } = useContext(AuthContext);
   const { displayName, email } = user;

   // Logout
   const handleLogOut = () => {
      logOut().then(() => {
         toast.error("Your are logged out!");
      });
   };
   return (
      <div
         className={`z-10 ${
            !expandProfile ? "hidden" : ""
         } absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
         <div className="px-4 py-3 text-sm text-gray-900">
            <div>{displayName ? displayName : "No name"}</div>
            <div className="font-medium truncate">
               {email ? email : "email not found"}
            </div>
         </div>
         <div className="py-1">
            <button
               onClick={handleLogOut}
               className="block w-full font-barlow uppercase text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
               Logout
            </button>
         </div>
      </div>
   );
};

export default UserDropdown;
