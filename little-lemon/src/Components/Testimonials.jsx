import React from 'react';
import person1Image from '../assets/images/review_image.png';
import person2Image from '../assets/images/review_image.png';
import person3Image from '../assets/images/review_image.png';
import person4Image from '../assets/images/review_image.png';

function Testimonials() {
  const testimonialsData = [
    {
      rating: "⭐⭐⭐⭐⭐",
      image: person1Image,
      name: "John Doe",
      review: "The food here is amazing! The ambiance is perfect for a family dinner.",
    },
    {
      rating: "⭐⭐⭐⭐",
      image: person2Image,
      name: "Jane Smith",
      review: "A delightful experience with fantastic service. Will come back again!",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      image: person3Image,
      name: "Emily Johnson",
      review: "Best restaurant in town! The dishes are out of this world.",
    },
    {
      rating: "⭐⭐⭐⭐",
      image: person4Image,
      name: "Michael Brown",
      review: "A great place to unwind after a long day. Highly recommended!",
    }
  ];

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-header">Testimonials</h2>
      <div className="testimonials-cards">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">{testimonial.rating}</div>
            <div className="testimonial-info">
              <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} className="testimonial-image" />
              <div className="testimonial-name">{testimonial.name}</div>
            </div>
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
