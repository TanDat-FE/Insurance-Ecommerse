import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "@components/ContentSideBar/Login/Login";
import HomeInf from "@components/InfoInsurace/HomeInf";
import "./App.css";
import MainLayout from "@components/Layout/MainLayout";
import Home from "@/Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Trang Login */}
        <Route path="/homes" element={<HomeInf/>} />  {/* Trang Home */}
      </Routes>
    </Router>
  );
}

export default App;
