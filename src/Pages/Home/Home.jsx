import Footer from "@/Pages/Footer/Footer";
import Contact from "@components/Contact/Contact";
import Reasons from "@components/Reason/Reasons";
import Banner from "@components/Banner/Banner";
import Header from "@/Pages/Header/Header";
import InsuranceGuide from "@components/purchase/InsuranceGuide";
import FAQ from "@components/faqs/FAQs";
import Info from "@components/Info/Info";
import Products from "@/Pages/Products/Products";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Reasons />
      <Info />
      <InsuranceGuide />
      <FAQ />
      <Contact />
      <Footer />
      <Products />
    </div>
  );
}

export default Home;
