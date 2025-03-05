import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import InsuranceGuide from "@components/purchase/InsuranceGuide";

function App() {
  return (
    <>
      <MainLayout>
        {/* <Login /> */}
        <InsuranceGuide />
      </MainLayout>
    </>
  );
}

export default App;
