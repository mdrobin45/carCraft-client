const SubmitBtn = ({ btnText }) => {
   return (
      <input
         className="block cursor-pointer w-full select-none rounded-lg bg-gradient-to-tr from-primary to-[#ff5c87] py-3 px-6 text-center align-middle font-barlow font-semibold tracking-wider text-md uppercase text-white transition-all hover:shadow-lg hover:shadow-primary/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
         type="submit"
         value={btnText}
      />
   );
};

export default SubmitBtn;
