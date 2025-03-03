import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./account/login/login.jsx";
import Signin from "./account/signin/signin.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
