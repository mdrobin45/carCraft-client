import Email from "../../Components/FormFields/AuthenticationFrom/Fields/Email";
import Name from "../../Components/FormFields/AuthenticationFrom/Fields/Name";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../SiteTitle/SiteTitle";

const Contact = () => {
   return (
      <>
         <SiteTitle>Contact</SiteTitle>
         <PageHeader title="Contact" />
         <div className="w-full md:w-2/4 mx-auto py-20 px-4 md:px-0">
            <h2
               style={{
                  WebkitTextStroke: "1px #2d373c",
                  WebkitTextFillColor: "transparent",
               }}
               className="text-4xl text-center md:text-left pb-3 uppercase mb-1 font-bold font-barlow text-gray-800 dark:text-gray-200">
               Contact
            </h2>
            <form className="flex flex-col gap-7">
               <Name />
               <Email />
               <div className="relative h-11 w-full min-w-[200px]">
                  <input
                     type="text"
                     name="subject"
                     className="peer dark:bg-gray-700 dark:text-gray-200 h-full w-full rounded-md border border-blue-gray-200 focus:ring-0 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                     placeholder=" "
                  />
                  <label className="before:content[' '] dark:text-gray-200  font-barlow after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Subject
                  </label>
               </div>
               <div className="relative w-full min-w-[200px]">
                  <textarea
                     cols="30"
                     rows="4"
                     name="message"
                     className="peer dark:bg-gray-700 dark:text-gray-200 h-full w-full rounded-md border border-blue-gray-200 focus:ring-0 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                     placeholder=" "></textarea>
                  <label className="before:content[' '] dark:text-gray-200 font-barlow after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-primary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-primary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                     Message
                  </label>
               </div>
               <input
                  type="submit"
                  className="middle font-barlow cursor-pointer w-full none border-2 border-primary hover:bg-transparent hover:border-primary center mb-2 rounded-lg bg-primary hover:text-primary py-2 font-semibold px-6 text-lg text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  value="Submit Now"
               />
            </form>
         </div>
      </>
   );
};

export default Contact;
