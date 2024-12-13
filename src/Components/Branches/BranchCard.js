import React from "react";
import styles from './Branches.module.css'; 
import { useNavigate } from "react-router-dom";

const BranchCard = ({ cityName, branchName, photo, branch }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("his data", branch); // Logs the branch data when the card is clicked
    navigate("/sections")
    
  };

  return (
    <div className={styles.cardContainer} onClick={handleCardClick} >
      <img src={photo} alt="Branch" className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cityName}>{cityName}</h3>
        <p className={styles.branchName}>{branchName}</p>
      </div>
    </div>
  );
};

export default BranchCard;
