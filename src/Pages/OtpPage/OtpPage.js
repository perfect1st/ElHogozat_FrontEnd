import React from 'react'
import OTP from '../../Components/OTP/OTP'
import Footer from '../../Components/Footer/Footer'
import styles from '../../Components/OTP/OTP.module.css';  
import { useTranslation } from "react-i18next";

const OtpPage = () => {
    const { t, i18n } = useTranslation();
  
  return (
    <div >
    <div className={styles.loginContainer}>
    <div className={styles.loginHeader}>{t("OTP")}</div>

      </div>

      <OTP />
      
    </div>
  )
}
export default OtpPage;
