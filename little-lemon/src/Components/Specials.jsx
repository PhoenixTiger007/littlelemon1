
import React, { useState } from 'react';
import greekSaladImage from '../assets/images/greek salad.jpg';
import bruschettaImage from '../assets/images/bruchetta.jpg';
import lemonDessertImage from '../assets/images/lemon dessert.jpg';

function Specials() {
  const [expandedCard, setExpandedCard] = useState(null);

  const specialsData = [
    {
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSaladImage,
      alt: "Greek Salad",
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschettaImage,
      alt: "Bruschetta",
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessertImage,
      alt: "Lemon Dessert",
    }
  ];

  const toggleReadMore = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>Specials</h2>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specialsData.map((special, index) => (
          <div className={`card ${expandedCard === index ? 'expanded' : ''}`} key={index}>
            <img src={special.image} alt={special.alt} className="card-image" />
            <div className="card-content">
              <div className="card-title-price">
                <h3>{special.title}</h3>
                <span className="card-price">{special.price}</span>
              </div>
              <div className={`card-description ${expandedCard === index ? 'expanded' : ''}`}>
                {special.description}
              </div>
              <span className="read-more" onClick={() => toggleReadMore(index)}>
                {expandedCard === index ? 'Read Less' : 'Read More'}
              </span>
              <button className="order-button">
                Order a Delivery <span className="scooter-icon">🛵</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
