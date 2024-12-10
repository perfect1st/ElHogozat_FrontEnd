import React, { useState } from 'react';
import styles from './TabsComponent.module.css'; // Import the CSS Module

const TabsComponent = () => {
  const tabs = ['الأقسام', 'الخدمات', 'مقدم الخدمة', 'الوقت'];

  const [selectedTab, setSelectedTab] = useState(2); // Initially select the first tab
  
  const handleTabClick = (index) => {
    // Allow clicking only on previous tabs or the current tab
    if (index <= selectedTab) {
      setSelectedTab(index); // Update selected tab index
    }
  };

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={styles.tab}
          style={{
            backgroundColor: selectedTab === index ? '#B49345' : '#E8E8E8',
            width: selectedTab === index ? '315.34px' : '157.67px', // Double the width for the selected tab
            zIndex: selectedTab === index ? '1000' : '1', // Double the width for the selected tab
            border: selectedTab === index ? '1px solid #B49345' : '1px solid #E8E8E8', // Double the width for the selected tab
            
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
