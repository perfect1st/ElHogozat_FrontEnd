import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import myImage from '../../Images/Logo.png';

const Footer = () => {
  

  return (
    <div className={`footer ${'visible'}`}>
      <div className="footer-content">
        <div className='logo'>
          <img src={myImage} alt="Company Logo" className='logo-image2' style={{ borderRadius: "8px" }} />
        </div>
        <div className="footer-text">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ 
          عن التركيز على الشكل الخارجي <br /> للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
        </div>
        <div className="footer-icons">
          <FaSquareFacebook color="#fff" size={24} />
          <IoLogoWhatsapp color="#fff" size={24} />
          <FaYoutube color="#fff" size={24} />
          <FaSnapchat color="#fff" size={24} />
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © 2024 SPA & GYM. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
