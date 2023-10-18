import Banner from "../../Components/Home/Banner/Banner";
import PopularBrands from "../../Components/Home/PopularBrands/PopularBrands";
import SiteTitle from "../../SiteTitle/SiteTitle";

const Home = () => {
   return (
      <div>
         <SiteTitle>Home</SiteTitle>
         <Banner />
         <PopularBrands />
      </div>
   );
};

export default Home;
