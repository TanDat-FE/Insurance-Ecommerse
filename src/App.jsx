import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Login_page/Auth.jsx";
import ReasonsSection from "./components/ReasonsSection.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />  {/* Trang Login */}
        <Route path="/reasons" element={<ReasonsSection />} />  {/* Trang Reasons */}
      </Routes>
    </Router>
  );
}

export default App;
