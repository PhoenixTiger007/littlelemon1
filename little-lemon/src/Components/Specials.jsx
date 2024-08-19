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
    <section className="specials-section" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">Specials</h2>
        <button className="online-menu-button" aria-label="View online menu">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specialsData.map((special, index) => (
          <article 
            className={`card ${expandedCard === index ? 'expanded' : ''}`} 
            key={index} 
            aria-expanded={expandedCard === index ? 'true' : 'false'}
          >
            <img src={special.image} alt={special.alt} className="card-image" />
            <div className="card-content">
              <div className="card-title-price">
                <h3 id={`special-title-${index}`}>{special.title}</h3>
                <span className="card-price">{special.price}</span>
              </div>
              <p 
                id={`card-description-${index}`} 
                className={`card-description ${expandedCard === index ? 'expanded' : ''}`}
              >
                {special.description}
              </p>
              <button 
                className="read-more" 
                onClick={() => toggleReadMore(index)} 
                aria-expanded={expandedCard === index ? 'true' : 'false'}
                aria-controls={`card-description-${index}`}
                aria-label={expandedCard === index ? 'Collapse description' : 'Expand description'}
              >
                {expandedCard === index ? 'Read Less' : 'Read More'}
              </button>
              <button 
                className="order-button" 
                aria-label={`Order a delivery of ${special.title}`}
              >
                Order a Delivery <span className="scooter-icon" role="img" aria-label="Scooter">🛵</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
