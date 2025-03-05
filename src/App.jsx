import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import Home from "@/Pages/Home/Home";

function App() {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
