import React from 'react'
import OTP from '../../Components/OTP/OTP'
import Footer from '../../Components/Footer/Footer'
import styles from '../../Components/OTP/OTP.module.css';  

const OtpPage = () => {
  return (
    <div >
    <div className={styles.loginContainer}>
    <div className={styles.loginHeader}>الرقم المتغير</div>

      </div>

      <OTP />
      
    </div>
  )
}
export default OtpPage;
