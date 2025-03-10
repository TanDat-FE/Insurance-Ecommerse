import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import InsuranceGuide from "@components/purchase/InsuranceGuide";
import FAQ from "@components/faqs/FAQs";

function App() {
  return (
    <>
      <MainLayout>
        <Login />
        
      </MainLayout>
    </>
  );
}

export default App;
