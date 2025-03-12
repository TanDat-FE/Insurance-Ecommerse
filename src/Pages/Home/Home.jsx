import Footer from "@/Pages/Footer/Footer";
import FooterFooter from "@/Pages/Footer/Footer";
import Contact from "@components/Contact/Contact";
import Reasons from "@components/Reason/Reasons";
import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";


function Home() {
  return (
    <div>
      <Reasons/>
      <Header/>
      <Banner/>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
