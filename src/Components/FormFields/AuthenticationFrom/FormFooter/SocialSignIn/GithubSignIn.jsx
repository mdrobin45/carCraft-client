import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../MyContext/AuthContextProvider";
import githubIcon from "../../../../../assets/images/github.svg";

const GithubSignIn = () => {
   const { loginWithGitHub } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();

   // Handle signIn with google
   const handleGithubSignIn = () => {
      loginWithGitHub()
         .then((result) => {
            if (result.user) {
               const toastMsg = toast.loading("");
               toast.update(toastMsg, {
                  render: "Login Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               if (state !== null) {
                  navigate(state.prevUrl);
               } else {
                  navigate("/");
               }
            }
         })
         .catch((err) => {
            if (err) {
               const toastMsg = toast.loading("");
               toast.update(toastMsg, {
                  render: "Something went wrong!",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };

   return (
      <button
         onClick={handleGithubSignIn}
         className="px-4 mt-4 w-4/5 justify-center mx-auto py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
         <img
            className="w-6 h-6"
            src={githubIcon}
            loading="lazy"
            alt="google logo"
         />
         <span>Continue with Github</span>
      </button>
   );
};

export default GithubSignIn;
