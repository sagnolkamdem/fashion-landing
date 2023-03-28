import Avone from "../sections/avone";
import Fashion from "../sections/fashion";
import Gallery from "../sections/gallery";
import Hero from "../sections/hero";
import Tachen from "../sections/tachen";
import Footer from "./components/footer";
import Header from "./components/header";

const LandingLayout = () => {
    return ( 
        <div className="h-screen overflow-y-scroll rounded-[50px]">
            <Header />

                <Hero />

                <Gallery />

                <Fashion />

                <Avone />

                <Tachen />
            
            <Footer />
        </div>
     );
}
 
export default LandingLayout;