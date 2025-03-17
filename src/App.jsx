import { Routes, Route, useLocation } from "react-router-dom"; 
import Login from "@components/ContentSideBar/Login/Login";
import Register from "@components/ContentSideBar/Login/Register";
import Home from "@/Pages/Home/Home";
import About from "@components/Get_a_quote/About";
import InsuranceHistory from "@components/Get_a_quote/Your_insurance_history";
import HomeInsuranceQuote from "@components/Get_a_quote/Primary_Coverage";
import MainLayout from "@components/Layout/MainLayout";
import Products from "@/Pages/Products/Products";
import Footer from "@/Pages/Footer/Footer";
import FindAgent from "./components/Find_An_Agent/FindAgent";
import Header from "@/Pages/Header/Header";
import FindAgentResults from "./components/Find_Agent_Results/FindAgentResults";


function App() {
  return (
    <MainLayout>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-agent" element={<FindAgent />} />
        <Route path="/insurance-history" element={<InsuranceHistory />} />
        <Route path="/home-insurance" element={<HomeInsuranceQuote />} />
        <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
            <Route path="/find-agent-results" element={<FindAgentResults />} />
      </Routes>
      
      {/* ✅ Chỉ hiển thị Footer nếu KHÔNG phải trang Login */}
      {location.pathname !== "/login" && <Footer />}
      {location.pathname !== "/register" && <Footer />}

    </MainLayout>
  );
}

export default App;
