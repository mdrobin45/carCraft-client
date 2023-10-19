import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Email from "../../../Components/FormFields/AuthenticationFrom/Fields/Email";
import Password from "../../../Components/FormFields/AuthenticationFrom/Fields/Password";
import SubmitBtn from "../../../Components/FormFields/AuthenticationFrom/Fields/SubmitBtn";
import FormFooter from "../../../Components/FormFields/AuthenticationFrom/FormFooter/FormFooter";
import GithubSignIn from "../../../Components/FormFields/AuthenticationFrom/FormFooter/SocialSignIn/GithubSignIn";
import GoogleSignIn from "../../../Components/FormFields/AuthenticationFrom/FormFooter/SocialSignIn/GoogleSignIn";

import FormHeader from "../../../Components/FormFields/AuthenticationFrom/FormHeader/FormHeader";
import PageHeader from "../../../Components/PageHeader/PageHeader";
import { AuthContext } from "../../../MyContext/AuthContextProvider";
import SiteTitle from "../../../SiteTitle/SiteTitle";

const Login = () => {
   const { loginWithEmailPassword } = useContext(AuthContext);
   const { state } = useLocation();
   const navigate = useNavigate();

   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password login
      loginWithEmailPassword(email, password)
         .then((result) => {
            if (result.user) {
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
               toast.update(toastMsg, {
                  render: "Incorrect email or password",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };
   return (
      <>
         <SiteTitle>Login</SiteTitle>
         <PageHeader title="Login" />
         <div className="flex flex-col items-center justify-center px-4 md:px-16 py-16">
            <div className="relative pb-6 flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
               <FormHeader heading="Login" />
               <form onSubmit={handleFormSubmit}>
                  <div className="flex flex-col gap-4 p-6">
                     <Email />
                     <Password />
                     <div className="-ml-2.5">
                        <Link
                           to="/reset-password"
                           className="ml-1 mb-3 block font-sans text-sm font-bold leading-normal text-primary antialiased">
                           Forgotten Password?
                        </Link>
                        <SubmitBtn btnText="Login" />
                     </div>
                  </div>
               </form>
               <FormFooter
                  linkComment="Don't have an account?"
                  linkText="Create a new account"
                  linkUrl="/register"
               />
               <GoogleSignIn />
               <GithubSignIn />
            </div>
         </div>
      </>
   );
};

export default Login;
