import React, { useState, useEffect } from 'react';
import styles from './TabsComponent.module.css'; 
import { useNavigate, useLocation } from 'react-router-dom'; 

const TabsComponent = () => {
  const tabs = ['الأقسام', 'الخدمات', 'مقدم الخدمة', 'الوقت'];

  const [selectedTab, setSelectedTab] = useState(0); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (index) => {
    if (index <= selectedTab) {
      setSelectedTab(index); 
    }
  };

  // Parse tab from URL query
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabFromURL = searchParams.get('tab');
    if (tabFromURL !== null && !isNaN(tabFromURL)) {
      setSelectedTab(Number(tabFromURL));
    }
  }, [location.search]);

  // Navigate based on selected tab
  useEffect(() => {
    if (selectedTab === 0) {
      navigate('/sections?tab=0');
    } else if (selectedTab === 1) {
      navigate('/services?tab=1');
    } else if (selectedTab === 2) {
      navigate('/serviceproviders?tab=2');
    } else if (selectedTab === 3) {
      navigate('/time?tab=3');
    }
  }, [selectedTab, navigate]);

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${styles.tab} ${selectedTab === index ? styles.Bigtab : styles.smalltab}`}
          style={{
            backgroundColor: selectedTab === index ? '#B49345' : '#E8E8E8',
            zIndex: selectedTab === index ? '1000' : index === (selectedTab - 1) ? '1111' : '1',
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
