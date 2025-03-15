import { Routes, Route, useLocation } from "react-router-dom"; 
import Login from "@components/ContentSideBar/Login/Login";
import Register from "@components/ContentSideBar/Login/Register";

import Home from "@/Pages/Home/Home";
import About from "@components/Get_a_quote/About";
import InsuranceHistory from "@components/Get_a_quote/Your_insurance_history";
import HomeInsuranceQuote from "@components/Get_a_quote/Primary_Coverage";
import MainLayout from "@components/Layout/MainLayout";
import Products from "@/Pages/Products/Products";
import Header from "@/Pages/Header/Header";
import Footer from "@/Pages/Footer/Footer";

function App() {
  const location = useLocation(); // ✅ Lấy đường dẫn hiện tại

  return (
    <MainLayout>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insurance-history" element={<InsuranceHistory />} />
        <Route path="/home-insurance" element={<HomeInsuranceQuote />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      
      {/* ✅ Chỉ hiển thị Footer nếu KHÔNG phải trang Login */}
      {location.pathname !== "/login" && <Footer />}
      {location.pathname !== "/register" && <Footer />}

    </MainLayout>
  );
}

export default App;
