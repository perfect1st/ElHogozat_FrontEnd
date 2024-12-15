import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import OtpPage from './Pages/OtpPage/OtpPage'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import BranchesPage from './Pages/BranchesPage/BranchesPage'
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage'

import './App.css';
import ServiesPage from './Pages/ServiesPage/ServiesPage';
import ServiceProvidersPage from './Pages/ServiceProvidersPage/ServiceProvidersPage';
import Details from './Components/Servies/Details';
import TimePage from './Pages/TimePage/TimePage';
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set direction based on language
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]); // Runs when the language changes

  return (
    <div className="" style={{overflow:"hidden"}}>
    <BrowserRouter>

      <NavBar />

      <Suspense fallback="loading..." >

      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route index path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/home" element={<BranchesPage />} />
      <Route path="/sections" element={<CategoriesPage />} />
      <Route path="/services" element={<ServiesPage />} />
      <Route path="/details" element={<Details />} />
      <Route path="/serviceproviders" element={<ServiceProvidersPage />} />
      <Route path="/time" element={<TimePage />} />


      </Routes>
      </Suspense>
      
    </BrowserRouter>
<Footer />
    <ToastContainer />
  </div>
  );
}

export default App;
