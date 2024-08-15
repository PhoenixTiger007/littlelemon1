import React from 'react';

function Testimonials() {
  const testimonialsData = [
    {
      rating: "⭐⭐⭐⭐⭐",
      image: "./src/assets/images/person1.jpg",
      name: "John Doe",
      review: "The food here is amazing! The ambiance is perfect for a family dinner.",
    },
    {
      rating: "⭐⭐⭐⭐",
      image: "./src/assets/images/person2.jpg",
      name: "Jane Smith",
      review: "A delightful experience with fantastic service. Will come back again!",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      image: "./src/assets/images/person3.jpg",
      name: "Emily Johnson",
      review: "Best restaurant in town! The dishes are out of this world.",
    },
    {
      rating: "⭐⭐⭐⭐",
      image: "./src/assets/images/person4.jpg",
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
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
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
