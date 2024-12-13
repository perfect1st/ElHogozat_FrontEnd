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
    { id: 1, image: image1, label: 'Spa' , price:"200 R.S"},
    { id: 2, image: image2, label: 'كوافير', price:"200 R.S" },
    { id: 3, image: image3, label: 'العناية بالبشرة ' , price:"200 R.S" },
    { id: 4, image: image4, label: 'مساج' , price:"200 R.S"},
    { id: 5, image: image3, label: 'العناية بالبشرة ', price:"200 R.S" },
    { id: 6, image: image4, label: 'مساج' , price:"200 R.S"},
    { id: 7, image: image2, label: 'كوافير' , price:"200 R.S"},
    { id: 8, image: image1, label: 'Spa' , price:"200 R.S" },

  ];
const onSubmit = (card) =>{
  navigate('/serviceproviders', { state: { cardData: card } });
  console.log("card",card)
}
  return (
    <div className={styles.cardContainer} >
      {cards.map((card) => (
        <div key={card.id} className={styles.card} onClick={()=>{onSubmit(card)}}>
          <img src={card.image} alt={card.label} className={styles.cardImage} />
          <div className={styles.cardLabel}>
            <span>{card.label}</span>
            <span>{card.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProviders;
