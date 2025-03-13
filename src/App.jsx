import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import InsuranceGuide from "@components/purchase/InsuranceGuide";
import FAQ from "@components/faqs/FAQs";
import Section7 from "@components/Section/Section7/section7";
import Section8 from "@components/Section/Section8/section8";
import Section9 from "@components/Section/Section9/section9";

function App() {
  return (
    <>
      <MainLayout>
        {/* <Login /> */}
        <Section7 />
        <Section8 />
        <Section9 />
        {/* <FAQ />
        <InsuranceGuide /> */}
      </MainLayout>
    </>
  );
}

export default App;
