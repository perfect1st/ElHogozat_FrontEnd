import React from 'react'
import styles from './Branches.module.css'; 
import BranchCard from "./BranchCard";
import Footer from "../Footer/Footer";

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



function Branches() {
  return (
    <div>
      <div>
      <div className={styles.chooseBranchLabel} >اختار اقرب فرع اليك</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap",direction:"rtl", justifyContent: "space-between", maxWidth:"900px", margin:"auto" }}>
      {branches.map((branch) => (
        <BranchCard
          key={branch.id}
          branch={branch}
          cityName={branch.cityName}
          branchName={branch.branchName}
          photo={branch.photo}
        />
      ))}
    </div>
    <div>
      <Footer />
    </div>
    </div>
  )
}
export default Branches;
