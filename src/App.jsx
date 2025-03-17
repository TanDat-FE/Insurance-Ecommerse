import MainLayout from "@components/Layout/MainLayout";
import Footer from "@/Pages/Footer/Footer";
import Header from "@/Pages/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </MainLayout>

    // <MainLayout>
    //   <Header />
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/find-agent" element={<FindAgent />} />
    //     <Route path="/insurance-history" element={<InsuranceHistory />} />
    //     <Route path="/home-insurance" element={<HomeInsuranceQuote />} />
    //     <Route path="/products" element={<Products />} />
    //       <Route path="/" element={<Home />} />
    //         <Route path="/find-agent-results" element={<FindAgentResults />} />
    //   </Routes>

    //   {/* ✅ Chỉ hiển thị Footer nếu KHÔNG phải trang Login */}
    //   {location.pathname !== "/login" && <Footer />}
    //   {location.pathname !== "/register" && <Footer />}

    // </MainLayout>
  );
}

export default App;
