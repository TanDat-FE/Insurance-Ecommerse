import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import HomeInf from "@components/InfoInsurace/HomeInf";


function App() {
  return (
    <>
      <MainLayout>
        <HomeInf />
      </MainLayout>
    </>
  );
}

export default App;
