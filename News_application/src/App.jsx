import React from "react";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LoginPage from "./Components/Login";
import SignUpPage from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Slider demo</h1>
      <Router>
        <Header/>
        <div>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<Card />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;