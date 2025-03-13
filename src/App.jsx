import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "@components/ContentSideBar/Login/Login";
import HomeInf from "@components/InfoInsurace/HomeInf";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import Home from "@/Pages/Home/Home";
import About from "@components/Get_a_quote/About";
import InsuranceHistory from "@components/Get_a_quote/Your_insurance_history";
import HomeInsuranceQuote from "@components/Get_a_quote/Primary_Coverage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Trang Login */}
        <Route path="/homes" element={<HomeInf/>} />  {/* Trang Home */}
        <Route path="/about" element={<About/>} />  {/* Trang about */}
        <Route path="/InsuranceHistory" element={<InsuranceHistory/>} />  {/* Trang InsuranceHistory*/}
        <Route path="/homeInsurance" element={<HomeInsuranceQuote />} />  
      </Routes>
    </Router>
  );
}

export default App;
