import React from "react";
import styles from "./SquareRadio.module.css";

const SquareRadio = ({
  id,
  value,
  onChange,
  name,
  checked,
  disabled = false,
  labelText = "",
  customStyles = {},
}) => {
  return (
    <div className={styles.container} style={customStyles.container}>
      {/* Square Radio Button */}
      <label
        htmlFor={id}
        className={`${styles.outerSquare} ${disabled ? styles.disabled : ""}`}
        style={customStyles.outerSquare}
      >
        <input
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={styles.innerInput}
          style={customStyles.innerInput}
        />
      </label>
      {/* Optional Label Text */}
      {labelText && (
        <label
          htmlFor={id}
          className={styles.labelText}
          style={customStyles.labelText}
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

export default SquareRadio;
