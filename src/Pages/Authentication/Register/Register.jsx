import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DisplayError from "../../../Components/FormFields/AuthenticationFrom/Fields/DisplayError";
import Email from "../../../Components/FormFields/AuthenticationFrom/Fields/Email";
import Name from "../../../Components/FormFields/AuthenticationFrom/Fields/Name";
import Password from "../../../Components/FormFields/AuthenticationFrom/Fields/Password";
import PhotoUrl from "../../../Components/FormFields/AuthenticationFrom/Fields/PhotoUrl";
import SubmitBtn from "../../../Components/FormFields/AuthenticationFrom/Fields/SubmitBtn";
import TOS from "../../../Components/FormFields/AuthenticationFrom/Fields/TOS";
import FormFooter from "../../../Components/FormFields/AuthenticationFrom/FormFooter/FormFooter";
import GoogleSignIn from "../../../Components/FormFields/AuthenticationFrom/FormFooter/SocialSignIn/GoogleSignIn";
import FormHeader from "../../../Components/FormFields/AuthenticationFrom/FormHeader/FormHeader";
import PageHeader from "../../../Components/PageHeader/PageHeader";
import { AuthContext } from "../../../MyContext/AuthContextProvider";
import SiteTitle from "../../../SiteTitle/SiteTitle";
import { formValidation } from "./Validation";

const Register = () => {
   const [errorMessage, setErrorMessage] = useState(null);
   const { registerWithEmailPassword, profileUpdate } = useContext(AuthContext);

   const navigate = useNavigate();
   // Form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const photoUrl = e.target.photoUrl.value;
      const password = e.target.password.value;
      const checkBox = e.target.checkbox.checked;

      // Form Validation
      const validationError = formValidation(name, email, password, checkBox);
      if (validationError) {
         setErrorMessage(validationError);
         return;
      }

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Processing...",
         isLoading: true,
      });

      // Firebase email password signUp
      registerWithEmailPassword(email, password)
         .then((result) => {
            if (result.user) {
               profileUpdate({
                  displayName: name,
                  photoURL: photoUrl,
               });
               toast.update(toastMsg, {
                  render: "Registration Successful!",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
               navigate("/");
            }
         })
         .catch((err) => {
            toast.update(toastMsg, {
               render: "Registration failed!",
               type: "error",
               isLoading: false,
               autoClose: 1000,
            });
            setErrorMessage(err.message);
         });
   };
   return (
      <>
         <SiteTitle>Register</SiteTitle>
         <PageHeader title="Create New Account" />
         <div className="flex flex-col items-center justify-center px-4 md:px-16 py-16">
            <div className="relative dark:bg-gray-700 pb-6 flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
               <FormHeader heading="Register" />
               <form onSubmit={handleFormSubmit}>
                  <div className="flex flex-col gap-4 p-6">
                     <Name />
                     <Email />
                     <PhotoUrl />
                     <Password />
                     <TOS />
                     <SubmitBtn btnText="Register" />
                     <DisplayError errMsg={errorMessage} />
                  </div>
               </form>
               <FormFooter
                  linkComment="Already have an account?"
                  linkUrl="/login"
                  linkText="Login"
               />
               <GoogleSignIn />
            </div>
         </div>
      </>
   );
};

export default Register;
