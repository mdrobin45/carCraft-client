import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import LatestCar from "../../Components/Home/LatesCar/LatestCar";
import PopularBrands from "../../Components/Home/PopularBrands/PopularBrands";
import Success from "../../Components/Home/Success/Success";
import SiteTitle from "../../SiteTitle/SiteTitle";

const Home = () => {
   return (
      <div>
         <SiteTitle>Home</SiteTitle>
         <Banner />
         <About />
         <Success />
         <PopularBrands />
         <LatestCar />
      </div>
   );
};

export default Home;
