import React, { useState } from 'react'
import TabsComponent from '../../Components/Categories/TabsComponent/TabsComponent'
import Time from '../../Components/Time/Time'
import styles from '../../Components/Time/Time.module.css'
import SearchComponent from '../../Components/Utilities/SearchComponent';


const branches = [
  {
    id: 1,
    cityName: "الرياض",
    branchName: "فرع العليا",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 2,
    cityName: "جدة",
    branchName: "فرع السلامة",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 3,
    cityName: "الدمام",
    branchName: "فرع الخليج",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 4,
    cityName: "مكة",
    branchName: "فرع العزيزية",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 5,
    cityName: "المدينة",
    branchName: "فرع القبلتين",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 6,
    cityName: "الخبر",
    branchName: "فرع الساحل",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 7,
    cityName: "أبها",
    branchName: "فرع النزهة",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 8,
    cityName: "الطائف",
    branchName: "فرع الوادي",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 9,
    cityName: "بريدة",
    branchName: "فرع الريان",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 10,
    cityName: "تبوك",
    branchName: "فرع المروج",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 11,
    cityName: "حائل",
    branchName: "فرع الخزامى",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 12,
    cityName: "جازان",
    branchName: "فرع الشاطئ",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 13,
    cityName: "نجران",
    branchName: "فرع الفهد",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 14,
    cityName: "الباحة",
    branchName: "فرع الغبراء",
    photo: "https://via.placeholder.com/200x120",
  },
  {
    id: 15,
    cityName: "عرعر",
    branchName: "فرع البلد",
    photo: "https://via.placeholder.com/200x120",
  },
];



const TimePage = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const [externalTab, setExternalTab] = useState(1);


  const handleCardClick = (tabIndex) => {
    setExternalTab(tabIndex);
  };

  // Example options array
  const options = branches.map((branch) => ({
    value: branch.id,
    label: `${branch.cityName} - ${branch.branchName}`,
  }));
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
        labelForOption="label"
        valueForOption="id"
        noOptionsMessage="لا يوجد فروع مطابقة لهذا الاسم" 
      />
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
   <TabsComponent externalTab={externalTab} />
      </div>
    <div className={styles.loginContainer}>
    <div className={styles.loginHeader}> الوقت</div>
    <div className={styles.loginSecHeader}>الأقسام المميزة و المخصصة</div>


      </div>

      <Time  onCardClick={handleCardClick} />
      
    </div>
  )
}
export default TimePage;
