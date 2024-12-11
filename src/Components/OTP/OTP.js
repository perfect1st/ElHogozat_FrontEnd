import React, { useState, useRef, useEffect } from 'react';
import styles from './OTP.module.css'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from '../Footer/Footer'

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate(); 
  const [time, setTime] = useState(180); // 3 minutes in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true); // To disable resend button

  console.log("isResendDisabled",isResendDisabled)

  const inputRefs = useRef([]);

  useEffect(() => {
    if (time === 0) {
      setIsResendDisabled(false); // Disable resend when time is up
      return;
    }

    const timerId = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timerId); // Cleanup timer when the component is unmounted
  }, [time]);


  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) { // Allow only a single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
  };


    // Format the time into mm:ss
    const formatTime = (time) => {
      const minutes = String(Math.floor(time / 60)).padStart(2, '0');
      const seconds = String(time % 60).padStart(2, '0');
      return `${minutes}:${seconds}`;
    };


    const handleResendClick = () => {
      setTime(180);
      setIsResendDisabled(true); // Disable resend button again
    };
  return (
    <div>
    <div  className={styles.mainContainer} >
      <div  className={styles.enterOtpLapel} >إدخل الرقم المرسل</div>
      <div  className={styles.mobileNumberContainer} >
        <div className={styles.mobileNumber}>+966 1231231231</div>
        <div className={styles.editNumber} onClick={handleNavigateToLogin}>تعديل الرقم</div>
         </div>
 <div className={styles.otpContainer}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={styles.otpInput}
        />
      ))}
    </div>

    <div  className={styles.mobileNumberContainer} >
        <div className={styles.mobileNumber}>{formatTime(time)} </div>
        <div className={styles.editNumber} disabled={isResendDisabled}   style={{cursor: isResendDisabled ? 'not-allowed' : 'pointer', }} onClick={handleResendClick} >إعادة الإرسال</div>
         </div>
         <div className={styles.onSubmit} onClick={()=>{navigate('/home')}} >إرسال</div>

    </div>
    {/* <div  className={styles.footerContainer} style={{marginTop:"20px", bottom:"0"}}>
      <Footer />
      </div> */}
    </div>
   
  );
};

export default OTP;
