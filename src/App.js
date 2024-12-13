import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
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
import Details from './Components/Servies/Details';

function App() {
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
      <Route path="/servies" element={<ServiesPage />} />
      <Route path="/details" element={<Details />} />


      </Routes>
      </Suspense>
      
    </BrowserRouter>
<Footer />
    <ToastContainer />
  </div>
  );
}

export default App;
