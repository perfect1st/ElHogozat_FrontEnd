import React from 'react'
import SignUp from '../../Components/SignUp/SignUp'
import styles from '../../Components/SignUp/SignUp.module.css';  // Import CSS Module styles

 function SignUpPage() {
  return (
    <div >
    <div className={styles.loginContainer}>
    <div className={styles.loginHeader}>تسجيل دخول</div>

      </div>
      <SignUp />
    </div>
  )
}
export default SignUpPage
