import About from "../../Components/Home/About/About";
import Banner from "../../Components/Home/Banner/Banner";
import PopularBrands from "../../Components/Home/PopularBrands/PopularBrands";
import SiteTitle from "../../SiteTitle/SiteTitle";

const Home = () => {
   return (
      <div>
         <SiteTitle>Home</SiteTitle>
         <Banner />
         <About />
         <PopularBrands />
      </div>
   );
};

export default Home;
