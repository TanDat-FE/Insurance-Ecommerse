import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "@components/Layout/MainLayout";
import Home from "@/Pages/Home/Home";
import Products from "@/Pages/Products/Products";
import Footer from "@/Pages/Footer/Footer";
import FindAgent from "./components/Find_An_Agent/FindAgent";
import Header from "@/Pages/Header/Header";
import FindAgentResults from "./components/Find_Agent_Results/FindAgentResults";


function App() {
  const location = useLocation(); // Lấy đường dẫn hiện tại

  return (
    <MainLayout>

      {/* {location.pathname === "/products" && <Header />} */}
     <Header/>
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/find-agent" element={<FindAgent />} />
        <Route path="/find-agent-results" element={<FindAgentResults />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
