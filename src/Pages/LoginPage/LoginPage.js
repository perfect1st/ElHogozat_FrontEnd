import React from 'react'
import Login from '../../Components/Login/Login'
import styles from '../../Components/Login/Login.module.css'; 

const LoginPage = () => {
  return (
    <div >
    <div className={styles.loginContainer}>
    <div className={styles.loginHeader}>تسجيل دخول</div>

      </div>
      <Login />
    </div>
  )
}
export default LoginPage;
