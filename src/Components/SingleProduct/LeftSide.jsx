import Button from "../Buttons/Button";
import KeyInfo from "./KeyInfo";

const LeftSide = ({ car }) => {
   const { name, photo, description } = car;
   return (
      <div className=" w-2/3 mx-auto my-20">
         <div className="my-4 bg-white p-4 rounded-md">
            <div className="flex items-center justify-between mb-4">
               <h2 className="text-4xl py-3 font-bold font-inter">{name}</h2>
               <Button to="/" btnText="Add To Cart" />
            </div>

            <img className="w-full rounded-md" src={photo} alt="Car" />
         </div>

         <div className="p-4 mt-6 bg-white rounded-md px-4 md:px-6 lg:px-10">
            <h2 className="text-2xl py-3 font-bold font-inter">
               Key Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
               <KeyInfo title="Body Type" text="Coupe" />
            </div>
         </div>
         <div className="p-4 mt-6 bg-white shadow-md rounded-md px-4 md:px-6 lg:px-10">
            <h2 className="text-2xl py-3 font-bold font-inter">Description</h2>
            <p>{description}</p>
         </div>
      </div>
   );
};

export default LeftSide;
