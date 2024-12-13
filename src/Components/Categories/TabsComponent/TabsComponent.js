import React, { useState, useEffect } from 'react';
import styles from './TabsComponent.module.css'; 
import { useNavigate } from 'react-router-dom'; 

const TabsComponent = ({externalTab}) => {
  const tabs = ['الأقسام', 'الخدمات', 'مقدم الخدمة', 'الوقت'];

  const [selectedTab, setSelectedTab] = useState(0); 
  const navigate = useNavigate(); 

  const handleTabClick = (index) => {
    if (index <= selectedTab) {
      setSelectedTab(index); 
    }
  };


  useEffect(() => {
    if (selectedTab === 0) {
      navigate('/sections');
    } else if (selectedTab === 1) {
      navigate('/servies');
    } else if (selectedTab === 2) {
      navigate('/agants');
    } else if (selectedTab === 3) {
      navigate('/time');
    }
  }, [selectedTab, navigate]);

  useEffect(() => {
    if (externalTab !== undefined) {
      setSelectedTab(externalTab);
    }
  }, [externalTab]);


  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${styles.tab} ${selectedTab === index ? styles.Bigtab : styles.smalltab}`}
          style={{
            backgroundColor: selectedTab === index ? '#B49345' : '#E8E8E8',
            // width: selectedTab === index ? '315.34px' : '157.67px', 
            zIndex: selectedTab === index ? '1000' : index ==  (selectedTab - 1) ? '1111' : '1', 
            border: selectedTab === index ? '1px solid #B49345' : '1px solid #E8E8E8', 
            
          }}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TabsComponent;
