import React, { useRef, useState , useEffect } from "react";
import styles from "./Time.module.css";
import SquareRadio from '../Utilities/SquareRadio'

const Time = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedInput, setSelectedInput] = useState(false);

console.log("selectedInput",selectedInput)
  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);

  // Generate dynamic years, months, and days
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);
  const allMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  // const days = Array.from({ length: new Date(selectedYear, selectedMonth, 0).getDate() }, (_, i) => i + 1);

  // Smooth scroll function
  const scroll = (ref, direction) => {
    let scrollInterval = setInterval(() => {
      ref.current.scrollLeft += direction * 10; // Adjust scroll speed
    }, 10);

    const stopScroll = () => {
      clearInterval(scrollInterval);
      window.removeEventListener("mouseup", stopScroll);
      window.removeEventListener("touchend", stopScroll);
    };

    window.addEventListener("mouseup", stopScroll);
    window.addEventListener("touchend", stopScroll);
  };
  // إعادة ترتيب الأشهر ليبدأ من الشهر الحالي
  const currentMonthIndex = new Date().getMonth();
  const months = allMonths.slice(currentMonthIndex).concat(allMonths.slice(0, currentMonthIndex));


  const generateDays = (year, month) => {
    const totalDays = new Date(year, month, 0).getDate();
    const today = new Date().getDate();
    const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

    // إعادة ترتيب الأيام ليبدأ من اليوم الحالي
    return daysArray.slice(today - 1).concat(daysArray.slice(0, today - 1));
  };

  const [days, setDays] = useState(generateDays(selectedYear, selectedMonth));

  useEffect(() => {
    // تحديث الأيام عند تغيير الشهر أو السنة
    setDays(generateDays(selectedYear, selectedMonth));
  }, [selectedYear, selectedMonth]);


  useEffect(() => {
    const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
    console.log("date", formattedDate);
  }, [selectedYear, selectedMonth, selectedDay]);


  return (
    <div className={styles.mainContainer} >
      {/* Year Selector */}
      <div className={styles.years} >
        <div className={styles.label}>السنه</div>
        <button className={styles.arrowButton} onMouseDown={() => scroll(yearRef, 1)}>
          {"<"}
        </button>
        <div className={styles.scrollContainer} ref={yearRef}>
          {years.map((year) => (
            <button
              key={year}
              className={`${styles.button} ${year === selectedYear ? styles.selected : ""}`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <button className={styles.arrowButton} onMouseDown={() => scroll(yearRef, -1)}>
          {">"}
        </button>
      </div>

      {/* Month Selector */}
      <div className={styles.years} style={{marginTop:"10px"}} >
      <div className={styles.label}>الشهر</div>
        <button className={styles.arrowButton} onMouseDown={() => scroll(monthRef, 1)}>
          {"<"}
        </button>
        <div className={styles.scrollContainer} ref={monthRef}>
          {months.map((month, index) => (
            <button
              key={index}
              className={`${styles.button} ${index + 1 === selectedMonth ? styles.selected : ""}`}
              onClick={() => setSelectedMonth(index + 1)}
            >
              {month}
            </button>
          ))}
        </div>
        <button className={styles.arrowButton} onMouseDown={() => scroll(monthRef, -1)}>
          {">"}
        </button>
      </div>

      {/* Day Selector */}
      <div className={styles.years} style={{marginTop:"10px"}} >
      <div className={styles.label}>اليوم</div>
        <button className={styles.arrowButton} onMouseDown={() => scroll(dayRef, 1)}>
          {"<"}
        </button>
        <div className={styles.scrollContainerDays} ref={dayRef}>
          {days.map((day) => (
            <button
              key={day}
              className={`${styles.buttonDays} ${day === selectedDay ? styles.selected : ""}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <button className={styles.arrowButton} onMouseDown={() => scroll(dayRef, -1)}>
          {">"}
        </button>
      </div>
      <div className={styles.TimeComponant}>
      {/* First Time Range */}
      <SquareRadio 
        value={selectedInput === 1}
        onChange={() => setSelectedInput(1)}
        name="timeRange"
      />
      <div>من</div>
      <div className={styles.TimeBox}>
        <span>11:00</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path opacity="0.4" d="M12 22.9414C17.5228 22.9414 22 18.4643 22 12.9414C22 7.41856 17.5228 2.94141 12 2.94141C6.47715 2.94141 2 7.41856 2 12.9414C2 18.4643 6.47715 22.9414 12 22.9414Z" fill="#292D32"/>
            <path d="M15.7106 16.8712C15.5806 16.8712 15.4506 16.8412 15.3306 16.7612L12.2306 14.9112C11.4606 14.4512 10.8906 13.4412 10.8906 12.5512V8.45117C10.8906 8.04117 11.2306 7.70117 11.6406 7.70117C12.0506 7.70117 12.3906 8.04117 12.3906 8.45117V12.5512C12.3906 12.9112 12.6906 13.4412 13.0006 13.6212L16.1006 15.4712C16.4606 15.6812 16.5706 16.1412 16.3606 16.5012C16.2106 16.7412 15.9606 16.8712 15.7106 16.8712Z" fill="#292D32"/>
          </svg>
        </span>
      </div>
      <div>الي</div>
      <div className={styles.TimeBox}>
        <span>12:00</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path opacity="0.4" d="M12 22.9414C17.5228 22.9414 22 18.4643 22 12.9414C22 7.41856 17.5228 2.94141 12 2.94141C6.47715 2.94141 2 7.41856 2 12.9414C2 18.4643 6.47715 22.9414 12 22.9414Z" fill="#292D32"/>
            <path d="M15.7106 16.8712C15.5806 16.8712 15.4506 16.8412 15.3306 16.7612L12.2306 14.9112C11.4606 14.4512 10.8906 13.4412 10.8906 12.5512V8.45117C10.8906 8.04117 11.2306 7.70117 11.6406 7.70117C12.0506 7.70117 12.3906 8.04117 12.3906 8.45117V12.5512C12.3906 12.9112 12.6906 13.4412 13.0006 13.6212L16.1006 15.4712C16.4606 15.6812 16.5706 16.1412 16.3606 16.5012C16.2106 16.7412 15.9606 16.8712 15.7106 16.8712Z" fill="#292D32"/>
          </svg>
        </span>
      </div>
      </div>

      <div className={styles.TimeComponant}>
      <SquareRadio 
        value={selectedInput === 2}
        onChange={() => setSelectedInput(2)}
        name="timeRange"
      />
      <div>من</div>
      <div className={styles.TimeBox}>
        <span>13:00</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path opacity="0.4" d="M12 22.9414C17.5228 22.9414 22 18.4643 22 12.9414C22 7.41856 17.5228 2.94141 12 2.94141C6.47715 2.94141 2 7.41856 2 12.9414C2 18.4643 6.47715 22.9414 12 22.9414Z" fill="#292D32"/>
            <path d="M15.7106 16.8712C15.5806 16.8712 15.4506 16.8412 15.3306 16.7612L12.2306 14.9112C11.4606 14.4512 10.8906 13.4412 10.8906 12.5512V8.45117C10.8906 8.04117 11.2306 7.70117 11.6406 7.70117C12.0506 7.70117 12.3906 8.04117 12.3906 8.45117V12.5512C12.3906 12.9112 12.6906 13.4412 13.0006 13.6212L16.1006 15.4712C16.4606 15.6812 16.5706 16.1412 16.3606 16.5012C16.2106 16.7412 15.9606 16.8712 15.7106 16.8712Z" fill="#292D32"/>
          </svg>
        </span>
      </div>
      <div>الي</div>
      <div className={styles.TimeBox}>
        <span>14:00</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path opacity="0.4" d="M12 22.9414C17.5228 22.9414 22 18.4643 22 12.9414C22 7.41856 17.5228 2.94141 12 2.94141C6.47715 2.94141 2 7.41856 2 12.9414C2 18.4643 6.47715 22.9414 12 22.9414Z" fill="#292D32"/>
            <path d="M15.7106 16.8712C15.5806 16.8712 15.4506 16.8412 15.3306 16.7612L12.2306 14.9112C11.4606 14.4512 10.8906 13.4412 10.8906 12.5512V8.45117C10.8906 8.04117 11.2306 7.70117 11.6406 7.70117C12.0506 7.70117 12.3906 8.04117 12.3906 8.45117V12.5512C12.3906 12.9112 12.6906 13.4412 13.0006 13.6212L16.1006 15.4712C16.4606 15.6812 16.5706 16.1412 16.3606 16.5012C16.2106 16.7412 15.9606 16.8712 15.7106 16.8712Z" fill="#292D32"/>
          </svg>
        </span>
      </div>
    </div>
    </div>
  );
};

export default Time;
