import { BsFillCarFrontFill } from "react-icons/bs";

const KeyInfo = ({ title, text }) => {
   return (
      <div className="flex gap-2">
         <div>
            <BsFillCarFrontFill className="text-primary text-lg mt-1" />
         </div>
         <div>
            <p className="text-md font-barlow font-semibold text-black">
               {title}
            </p>
            <p className="text-sm">{text}</p>
         </div>
      </div>
   );
};

export default KeyInfo;
