import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './Login.module.css'; 
import { useNavigate } from 'react-router-dom'; 
import TabsComponent from '../Categories/TabsComponent/TabsComponent'
const Login = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('+966');

  const handleWheel = (e) => {
    e.preventDefault(); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleSubmit(); 
    }
  };
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = () => {
    const fullPhoneNumber = `+966${phoneNumber}`;
    console.log('Phone number submitted:', fullPhoneNumber);
  };


  const handleNavigateToSignup = () => {
    navigate('/signup');
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        {/* <TabsComponent /> */}
        {/* <div className={styles.loginHeader}>تسجيل دخول</div> */}
        <div>
          <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
              <span>+966</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className={styles.arrowIcon}>
                  <path d="M19.9181 9.44156L13.3981 15.9616C12.6281 16.7316 11.3681 16.7316 10.5981 15.9616L4.07812 9.44156" stroke="#E8E8E8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div className={styles.inputWrapperWithIcon}>
            <input
                type="number"
                placeholder="ر قم الجوال"
                className={styles.inputField}
                value={phoneNumber}
                onChange={handleChange} // Handle change to update phone number
                onKeyDown={handleKeyDown} // Listen for Enter key press
                onWheel={handleWheel} // Prevent wheel scroll
              />
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none" className={styles.inputIcon}>
                <path d="M25.8294 5.5H14.9961C12.2347 5.5 9.99609 7.73858 9.99609 10.5V31.3333C9.99609 34.0948 12.2347 36.3333 14.9961 36.3333H25.8294C28.5908 36.3333 30.8294 34.0948 30.8294 31.3333V10.5C30.8294 7.73858 28.5908 5.5 25.8294 5.5Z" stroke="#8B8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.7461 30.5H22.0794" stroke="#8B8C8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.submitContainer}>
          <div className={styles.onSubmit} onClick={handleSubmit}>إرسال</div>
          <div className={styles.onRegister} onClick={handleNavigateToSignup}>تسجيل جديد</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
