import React from 'react';
import styles from './ServiceProviders.module.css';
import image1 from '../../Images/1.png'
import image2 from '../../Images/2.png'
import image3 from '../../Images/3.png'
import image4 from '../../Images/4.png'
import { useNavigate } from 'react-router-dom';

const ServiceProviders = ({onCardClick}) => {
  // Array of card data
  const navigate = useNavigate();
  const cards = [
    { id: 1, image: image1, label: 'محمد احمد علي' },
    { id: 2, image: image1, label: 'خالد حسن إبراهيم' },
    { id: 3, image: image1, label: 'علي محمود عمر' },
    { id: 4, image: image1, label: 'يوسف عبد الله صالح' },
    { id: 5, image: image1, label: 'سعيد محمد ناصر' },
    { id: 6, image: image1, label: 'عمر عبد الرحمن يوسف' },
    { id: 7, image: image1, label: 'إبراهيم خالد فؤاد' },
    { id: 8, image: image1, label: 'فهد حسن سعيد' },
    { id: 9, image: image1, label: 'طارق يوسف أحمد' },
    { id: 10, image: image1, label: 'عبد الله ناصر علي' },
    { id: 11, image: image1, label: 'حسن فهد محمود' },
    { id: 12, image: image1, label: 'أحمد سعيد خالد' },
  ];
const onSubmit = (card) =>{
  console.log("card",card)
  navigate("/time?tab=3")
}
  return (
    <div className={styles.cardContainer} >
      {cards.map((card) => (
        <div key={card.id} className={styles.card} onClick={()=>{onSubmit(card)}}>
          <img src={card.image} alt={card.label} className={styles.cardImage} />
          <div className={styles.cardLabel}>
            <span>{card.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProviders;
