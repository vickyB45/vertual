import Navbar from "./components/Navbar";
import "./App.css"
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-8 lg:px-20 ">
    <HeroSection/>
    <FeatureSection/>
    <WorkFlow/>
    <Price/>
    <Testimonial/>
    </div>
  </>
  );
}

export default App;
