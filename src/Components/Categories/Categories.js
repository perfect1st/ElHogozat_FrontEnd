import React from 'react';
import styles from './Categories.module.css';
import image1 from '../../Images/1.png'
import image2 from '../../Images/2.png'
import image3 from '../../Images/3.png'
import image4 from '../../Images/4.png'

const Categories = ({onCardClick}) => {
  // Array of card data
  const cards = [
    { id: 1, image: image1, label: 'Spa' },
    { id: 2, image: image2, label: 'كوافير' },
    { id: 3, image: image3, label: 'العناية بالبشرة ' },
    { id: 4, image: image4, label: 'مساج' },
    { id: 5, image: image3, label: 'العناية بالبشرة ' },
    { id: 6, image: image4, label: 'مساج' },
    { id: 7, image: image2, label: 'كوافير' },
    { id: 8, image: image1, label: 'Spa' },

  ];
const onSubmit = (card) =>{
  onCardClick(1)
  console.log("card",card)
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

export default Categories;
