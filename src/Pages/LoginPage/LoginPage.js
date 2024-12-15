import React from 'react'
import Login from '../../Components/Login/Login'
import styles from '../../Components/Login/Login.module.css'; 
import { useTranslation } from "react-i18next";


const LoginPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div >
    <div className={styles.loginContainer}>
    <div className={styles.loginHeader}>{t('login')}</div>

      </div>
      <Login />
    </div>
  )
}
export default LoginPage;
