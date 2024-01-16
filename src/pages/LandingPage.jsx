import { useEffect } from "react";
import About from "../components/About";
import Showcase from "../components/Showcase";
import "../components/landingpage.css"
import Qualities from "../components/Qualities";
import Investments from "../components/Investments";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Info from "../components/Info";
import Plan from "../components/Plan";
import Review from "../components/Review";
import Aos from "aos";
import 'aos/dist/aos.css'
import Navbar from "../components/Navbar";
const LandingPage = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
},[])
  return( 
    <div className="landing-page">
        <Navbar />
        <Showcase />
        <About/>
        <Qualities />
        <Investments />
        <Info />
        <Plan/>
        <Faq />
        <Review />
        <Contact />
        <Footer />
    </div>
  );
};

export default LandingPage;
