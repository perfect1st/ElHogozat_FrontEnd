import React, { useRef, useState } from "react";
import styles from "./Time.module.css";

const Time = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(6); // Default to July
  const [selectedDay, setSelectedDay] = useState(1);

  // Scroll references
  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);

  // Years, Months, Days Data
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
  const months = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Scroll Handler
  const handleScroll = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth / 5; // Smooth scroll by 1 item
      ref.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.dateSelector}>
      {/* Year Selector */}
      <div className={styles.selector}>
        <button
          className={styles.navButton}
          onClick={() => handleScroll("next", yearRef)}

        >
          &lt;
        </button>
        <div className={styles.scrollContainer} ref={yearRef}>
          {years.map((year) => (
            <button
              key={year}
              className={`${styles.button} ${
                year === selectedYear ? styles.selected : ""
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <button
          className={styles.navButton}
          onClick={() => handleScroll("prev", yearRef)}
        >
          &gt;
        </button>
      </div>

      {/* Month Selector */}
      <div className={styles.selector}>
        <button
          className={styles.navButton}
          onClick={() => handleScroll("next", monthRef)}

        >
          &lt;
        </button>
        <div className={styles.scrollContainer} ref={monthRef}>
          {months.map((month, index) => (
            <button
              key={month}
              className={`${styles.button} ${
                index === selectedMonth ? styles.selected : ""
              }`}
              onClick={() => setSelectedMonth(index)}
            >
              {month}
            </button>
          ))}
        </div>
        <button
          className={styles.navButton}
          onClick={() => handleScroll("prev", monthRef)}
        >
          &gt;
        </button>
      </div>

      {/* Day Selector */}
      <div className={styles.selector}>
        <button
          className={styles.navButton}
          onClick={() => handleScroll("next", dayRef)}

        >
          &lt;
        </button>
        <div className={styles.scrollContainer} ref={dayRef}>
          {days.map((day) => (
            <button
              key={day}
              className={`${styles.button} ${
                day === selectedDay ? styles.selected : ""
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <button
          className={styles.navButton}
          onClick={() => handleScroll("prev", dayRef)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Time;
