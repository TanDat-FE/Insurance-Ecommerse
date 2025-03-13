import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import Home from "@/Pages/Home/Home";
import Products from "@/Pages/Products/Products";
import Header from "@/Pages/Header/Header";
import Footer from "@/Pages/Footer/Footer";

function App() {
  return (
    <>
      <MainLayout>
        <Header />
        {/* <Home /> */}
        <Products />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
