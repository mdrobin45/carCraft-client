const FormHeader = ({ heading }) => {
   return (
      <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-primary to-[#ff5c87] bg-clip-border text-white shadow-lg shadow-primary/40">
         <h3 className="block font-barlow text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
            {heading}
         </h3>
      </div>
   );
};

export default FormHeader;
