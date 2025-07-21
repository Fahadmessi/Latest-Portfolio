import React from 'react';
import { testimonials } from '../data/portfolioData';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonial-content">
        <div className="testimonial-top">
          <h3>Testimonials</h3>
          <p>Nice things people have said about me:</p>
        </div>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="test-card" key={index}>
              <img src={testimonial.avatar} alt="" />
              <p>{testimonial.text}</p>
              <h3>{testimonial.author}</h3>
              <p>{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;