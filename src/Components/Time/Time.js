import React, { useRef, useState , useEffect } from "react";
import styles from "./Time.module.css";

const Time = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);

  // Generate dynamic years, months, and days
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const days = Array.from({ length: new Date(selectedYear, selectedMonth, 0).getDate() }, (_, i) => i + 1);

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
    </div>
  );
};

export default Time;
