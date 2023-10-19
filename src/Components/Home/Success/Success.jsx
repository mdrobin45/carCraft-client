import { BiHappyAlt } from "react-icons/bi";
import { BsFillCarFrontFill, BsPersonWorkspace } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import SuccessCard from "./SuccessCard";

const Success = () => {
   return (
      <div className="grid bg-primary my-10 py-10 px-4 md:px-6 lg:px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
         <SuccessCard title="+ Available Cars" count="500">
            <BsFillCarFrontFill className="text-6xl text-white" />
         </SuccessCard>
         <SuccessCard title="+ Happy Clients" count="900">
            <BiHappyAlt className="text-6xl text-white" />
         </SuccessCard>
         <SuccessCard title="+ Team Workers" count="1500">
            <RiTeamFill className="text-6xl text-white" />
         </SuccessCard>
         <SuccessCard title="+ Years Of Experience" count="30">
            <BsPersonWorkspace className="text-6xl text-white" />
         </SuccessCard>
      </div>
   );
};

export default Success;
