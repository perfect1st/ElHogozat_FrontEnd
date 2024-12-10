import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import myImage from '../../Images/Logo.png';
import { FiMenu } from 'react-icons/fi'; // Import hamburger icon

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const navLinks = [
    { to: "/home", label: "الرئيسية" },
    { to: "/sections", label: "الاقسام" },
    { to: "/packages", label: "الباقات" },
    { to: "/bookings", label: "حجوزاتي" },
    { to: "/profile", label: "الصفحه الشخصيه" },
    { to: "/contact", label: "تواصل معنا" },
    { to: "/terms", label: "الشروط والاحكام" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar"
    style={{
      justifyContent: "space-around", 
      alignItems: "baseline", 
      flexWrap: "nowrap", 
      // overflow: "auto", 
      width: "100%", /* Or any fixed width like 300px */
      maxWidth: "100%", /* Optional, can be used to limit width */
      whiteSpace: "nowrap" /* Ensures content doesn’t wrap */
    }}
    >
      <div className='logo'>
        <img src={myImage} alt="Company Logo" className='logo-image'  />
      </div>



      <div className={`nav-links-container ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''} nav-link-styles`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{cursor:"pointer"}}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 41" className="icon">
    <path d="M30.3115 30.5547H12.5614C10.9114 30.5547 9.32811 29.8547 8.21145 28.638C7.09478 27.4214 6.52813 25.788 6.66146 24.138L8.0448 7.53802C8.0948 7.02136 7.91145 6.52136 7.56145 6.13803C7.21145 5.7547 6.72812 5.55469 6.21145 5.55469H3.32812C2.64479 5.55469 2.07812 4.98802 2.07812 4.30469C2.07812 3.62135 2.64479 3.05469 3.32812 3.05469H6.22813C7.4448 3.05469 8.59478 3.57135 9.41145 4.45468C9.86145 4.95468 10.1948 5.53803 10.3781 6.18803H31.1948C32.8781 6.18803 34.4281 6.85469 35.5615 8.05469C36.6781 9.27135 37.2448 10.8547 37.1115 12.538L36.2115 25.038C36.0281 28.088 33.3615 30.5547 30.3115 30.5547ZM10.4615 8.67135L9.16146 24.338C9.07813 25.3047 9.39479 26.2213 10.0448 26.938C10.6948 27.6547 11.5948 28.038 12.5614 28.038H30.3115C32.0448 28.038 33.6115 26.5714 33.7448 24.838L34.6448 12.338C34.7114 11.3547 34.3948 10.4214 33.7448 9.73804C33.0948 9.03804 32.1948 8.65466 31.2115 8.65466H10.4615V8.67135Z" fill="#B49345"/>
    <path d="M27.0833 38.8874C25.25 38.8874 23.75 37.3874 23.75 35.554C23.75 33.7207 25.25 32.2207 27.0833 32.2207C28.9167 32.2207 30.4167 33.7207 30.4167 35.554C30.4167 37.3874 28.9167 38.8874 27.0833 38.8874ZM27.0833 34.7207C26.6167 34.7207 26.25 35.0874 26.25 35.554C26.25 36.0207 26.6167 36.3874 27.0833 36.3874C27.55 36.3874 27.9167 36.0207 27.9167 35.554C27.9167 35.0874 27.55 34.7207 27.0833 34.7207Z" fill="#B49345"/>
    <path d="M13.7552 38.8874C11.9219 38.8874 10.4219 37.3874 10.4219 35.554C10.4219 33.7207 11.9219 32.2207 13.7552 32.2207C15.5885 32.2207 17.0885 33.7207 17.0885 35.554C17.0885 37.3874 15.5885 38.8874 13.7552 38.8874ZM13.7552 34.7207C13.2885 34.7207 12.9219 35.0874 12.9219 35.554C12.9219 36.0207 13.2885 36.3874 13.7552 36.3874C14.2219 36.3874 14.5885 36.0207 14.5885 35.554C14.5885 35.0874 14.2219 34.7207 13.7552 34.7207Z" fill="#B49345"/>
    <path d="M35 15.5547H15C14.3167 15.5547 13.75 14.988 13.75 14.3047C13.75 13.6214 14.3167 13.0547 15 13.0547H35C35.6833 13.0547 36.25 13.6214 36.25 14.3047C36.25 14.988 35.6833 15.5547 35 15.5547Z" fill="#B49345"/>
  </svg>
</div>

<div className="burger-button" onClick={toggleMenu}>
        <FiMenu size={30} color="#B49345" />
      </div>
    </div>
  );
};

export default NavBar;
