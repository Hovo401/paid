// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home.page';
import About from './pages/About.page';
import Categories from './pages/Categories/Categories.page';
import './App.css';
import HowItWorks from './pages/HowItWorks.page';
import RegInfluencer from './pages/RegistrationInfluencer.page';
import Login from './pages/Login.page';
import NotFound from './pages/NotFound.page';
import Registration from './pages/Registration.page';
import { useEffect } from 'react';
import UserPage from './pages/UserPage/User.page';
import MainAccaunt from './pages/accaunt/MainAccaunt.Page';

function App() {
  useEffect(() => {
    const darkMode_ = localStorage.getItem('darkMode') ?? 0;
    document.documentElement.classList.toggle('dark', !+darkMode_);
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full flex flex-grow flex-col  pt-[50px] relative">
      <BrowserRouter basename="/paidemail">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/RegInfluencer" element={<RegInfluencer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/accaunt" element={<MainAccaunt />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
