import React, { useRef, useState } from "react";
import styles from "./SignUp.module.css"; // Import CSS Module styles
import { BsGenderFemale } from "react-icons/bs";
import myImage from "../../Images/calendar-edit.svg";
import Footer from "../Footer/Footer";

function SignUp() {
  const dateInputRef = useRef(null);

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker(); // Trigger the calendar
    }
  };

  const [userName, setUserName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState("+966");
  const [idNumber, setIdNumber] = useState("");
  const [gender, setGender] = useState(""); // State to store selected value
  const [date, setDate] = useState("");

const onSubmit = () =>{
  const fullPhoneNumber = `+966${phoneNumber}`
  const data = {
    userName:userName,
    phoneNumber:fullPhoneNumber,
    idNumber:idNumber,
    gender:gender,
    date:date
  }
  console.log("data",data)
}
  
  const handleChange = (event) => {
    setGender(event.target.value); // Update state on select change
  };
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.inputsContainer}>
          <div className={styles.inputWrapperWithIcon}>
            <input
              type="text"
              placeholder="اسم المستخدم"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className={styles.inputField}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              className={styles.inputIcon}
            >
              <path
                d="M20.2682 19.0577C20.1016 19.0411 19.9016 19.0411 19.7182 19.0577C15.7516 18.9244 12.6016 15.6744 12.6016 11.6744C12.6016 7.59108 15.9016 4.27441 20.0016 4.27441C24.0849 4.27441 27.4016 7.59108 27.4016 11.6744C27.3849 15.6744 24.2349 18.9244 20.2682 19.0577Z"
                stroke="#8B8C8C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9352 25.2084C7.90182 27.9084 7.90182 32.3084 11.9352 34.9917C16.5185 38.0584 24.0352 38.0584 28.6185 34.9917C32.6518 32.2917 32.6518 27.8917 28.6185 25.2084C24.0518 22.1584 16.5352 22.1584 11.9352 25.2084Z"
                stroke="#8B8C8C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.inputWrapperWithIcon}>
            <input
              type="text"
              placeholder="الإيميل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              className={styles.inputIcon}
            >
              <path
                d="M30.3372 11H10.3372C8.49629 11 7.00391 12.4924 7.00391 14.3333V27.6667C7.00391 29.5076 8.49629 31 10.3372 31H30.3372C32.1782 31 33.6706 29.5076 33.6706 27.6667V14.3333C33.6706 12.4924 32.1782 11 30.3372 11Z"
                stroke="#8B8C8C"
                stroke-width="2"
              />
              <path
                d="M7.00391 16L18.8472 21.9217C19.3099 22.1529 19.82 22.2732 20.3372 22.2732C20.8545 22.2732 21.3646 22.1529 21.8272 21.9217L33.6706 16"
                stroke="#8B8C8C"
                stroke-width="2"
              />
            </svg>
          </div>

          <div className={styles.inputContainer2}>
            <div className={styles.inputWrapper}>        
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  className={styles.arrowIcon}
                >
                  <path
                    d="M19.9181 9.44156L13.3981 15.9616C12.6281 16.7316 11.3681 16.7316 10.5981 15.9616L4.07812 9.44156"
                    stroke="#E8E8E8"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>+966</span>
            </div>
            <div className={styles.inputWrapperWithIcon}>
              <input
                type="number"
                placeholder="ر قم الجوال"
                className={styles.inputField2}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onWheel={(e) => e.preventDefault()} // Prevent wheel scroll
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                className={styles.inputIcon}
              >
                <path
                  d="M25.8294 5.5H14.9961C12.2347 5.5 9.99609 7.73858 9.99609 10.5V31.3333C9.99609 34.0948 12.2347 36.3333 14.9961 36.3333H25.8294C28.5908 36.3333 30.8294 34.0948 30.8294 31.3333V10.5C30.8294 7.73858 28.5908 5.5 25.8294 5.5Z"
                  stroke="#8B8C8C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.7461 30.5H22.0794"
                  stroke="#8B8C8C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className={styles.inputWrapperWithIcon}>
            <input
              type="number"
              placeholder="رقم الهوية"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              onWheel={(e) => e.preventDefault()}
              className={styles.inputField}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              className={styles.inputIcon}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 12.2C5 10.985 5.95939 10 7.14286 10H32.8571C34.0406 10 35 10.985 35 12.2V29.8C35 31.0151 34.0406 32 32.8571 32H7.14286C5.95939 32 5 31.0151 5 29.8V12.2ZM17.8571 17.7C17.8571 19.5225 16.4181 21 14.6429 21C12.8677 21 11.4286 19.5225 11.4286 17.7C11.4286 15.8775 12.8677 14.4 14.6429 14.4C16.4181 14.4 17.8571 15.8775 17.8571 17.7ZM8.31425 26.0648C9.88156 24.3043 12.1366 23.2 14.6428 23.2C17.149 23.2 19.404 24.3043 20.9713 26.0648C21.528 26.6902 21.0351 27.6 20.2099 27.6H9.07563C8.25044 27.6 7.75754 26.6902 8.31425 26.0648ZM24.0178 17.7001C24.0178 16.9407 24.6174 16.3251 25.3571 16.3251H29.6429C30.3824 16.3251 30.9821 16.9407 30.9821 17.7001C30.9821 18.4595 30.3824 19.0751 29.6429 19.0751H25.3571C24.6174 19.0751 24.0178 18.4595 24.0178 17.7001ZM25.3571 22.9251C24.6174 22.9251 24.0178 23.5407 24.0178 24.3001C24.0178 25.0595 24.6174 25.6751 25.3571 25.6751H29.6429C30.3824 25.6751 30.9821 25.0595 30.9821 24.3001C30.9821 23.5407 30.3824 22.9251 29.6429 22.9251H25.3571Z"
                stroke="#8B8C8C"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div className={styles.inputWrapperWithIcon}>
            <select
              value={gender} // Bind state to the select value
              onChange={handleChange} // Handle change event
              className={styles.inputField} // Apply styles
            >
              <option value="" disabled hidden>
                النوع
              </option>
              <option value="male">َذكر</option>
              <option value="female">انثى</option>
            </select>
            <div className={styles.inputIcon}>
              <BsGenderFemale color="#8B8C8C" size={"40px"}  className={styles.genderIcon} />
            </div>
          </div>
          <div className={styles.inputWrapperWithIcon}>
            <input
              type="date"
              value={date}
              onChange={(e)=>setDate(e.target.value)}
              placeholder="تاريخ الميلاد"
              ref={dateInputRef}
              className={styles.inputField}
            />
            <img
              src={myImage}
              alt="Calendar Edit"
              className={styles.inputIcon}
              onClick={openDatePicker}
            />
          </div>

          <div className={styles.onSubmit} onClick={onSubmit}>إرسال</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;
