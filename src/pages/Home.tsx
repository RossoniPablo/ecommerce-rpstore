// import BannerCarousel from "../components/BannerCarousel";
import BannerCarousel from "../components/BannerCarousel";
import Benefits from "../components/Benefits";
import BestSellers from "../components/BestSellers";
import Categories from "../components/Categories";
import { NavBar } from "../components/NavBar"



const Home = () => {
  return (
    <div>
      <NavBar />
      <BannerCarousel />
      <Benefits />
      <Categories />
      <BestSellers />


    </div >
  )
}

export default Home;