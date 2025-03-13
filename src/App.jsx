
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomeInf from "@components/InfoInsurace/HomeInf";
// import MainLayout from "@components/Layout/MainLayout";
// import Home from "@/Pages/Home/Home";
// import About from "@components/Get_a_quote/About";
// import InsuranceHistory from "@components/Get_a_quote/Your_insurance_history";
// import HomeInsuranceQuote from "@components/Get_a_quote/Primary_Coverage";

import Login from "@components/ContentSideBar/Login/Login";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import Home from "@/Pages/Home/Home";
import Products from "@/Pages/Products/Products";
import Header from "@/Pages/Header/Header";
import Footer from "@/Pages/Footer/Footer";

function App() {
  return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />  {/* Trang Login */}
//         <Route path="/homes" element={<HomeInf/>} />  {/* Trang Home */}
//         <Route path="/about" element={<About/>} />  {/* Trang about */}
//         <Route path="/InsuranceHistory" element={<InsuranceHistory/>} />  {/* Trang InsuranceHistory*/}
//         <Route path="/homeInsurance" element={<HomeInsuranceQuote />} />  
//       </Routes>
//     </Router>
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
