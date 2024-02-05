import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct  from './pages/AddProduct';
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
