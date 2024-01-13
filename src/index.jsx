import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './_pages/Home';
import About from "./_pages/About";
import Housing from "./_pages/Housing";
import Error from "./_pages/Error"
import Header from "./_components/Header";
import Footer from "./_components/Footer"
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>

      <Header/>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/housing/{id}" element={<Housing/>} />
        <Route path="*" element={<Error/>} />

      </Routes>

      <Footer/>

    </Router>
    
  </React.StrictMode>
);


