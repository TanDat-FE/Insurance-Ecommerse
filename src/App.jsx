import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';  // Thêm trang Home mới

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} /> {/* Thêm Home */}
            </Routes>
        </Router>
    );
}

export default App;
