import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import HomeInf from "@components/InfoInsurace/HomeInf";


function App() {
  return (
    <>
      <MainLayout>
        <Login/>
      </MainLayout>
    </>
  );
}

export default App;
