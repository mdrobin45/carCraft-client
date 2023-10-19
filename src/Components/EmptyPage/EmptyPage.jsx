import image from "../../assets/images/nodata.png";
const EmptyPage = () => {
   return (
      <div className="flex h-[80vh] flex-col items-center justify-center">
         <img className="w-2/4" src={image} alt="No data found!" />
         <h2 className="text-5xl text-gray-400">No data found!</h2>
      </div>
   );
};

export default EmptyPage;
