import React, { useState } from 'react';
import Branches from '../../Components/Branches/Branches'
import styles from '../../Components/Branches/Branches.module.css'; 
import SearchComponent from '../../Components/Utilities/SearchComponent'

const BranchesPage = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  // Example options array
  const options = [
    { id: 1, name: 'الفرع الاول' },
    { id: 2, name: 'الفرع الثاني' },
    { id: 3, name: 'الفرع الثالث' },

  ];

  // Handle onChange
  const handleChange = (selected) => {
    setSelectedOption(selected);
    console.log("Selected:", selected);
  };


  return (
    <div >
    <div style={{ padding: '20px', maxWidth: '1000px', margin:"auto" }}>
    <SearchComponent
        options={options}
        onChange={handleChange}
        placeholder=""
        labelForOption="name"
        valueForOption="id"
        noOptionsMessage="لا يوجد فروع مطابقة لهذا الاسم" 
      />
      </div>
      

    <div className={styles.loginContainer}>
    <div className={styles.loginHeader}>الفروع</div>

      </div>
      <Branches />
    </div>
  )
}
export default BranchesPage;
