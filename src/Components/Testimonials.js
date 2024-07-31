import React, { useState, useEffect } from 'react';
import './Testimonials.css'; 

const testimonials = [
  {
    name: 'Natasha D',
    location: 'New York',
    content: 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.',
    image: './images/comment2.jpg'
  },
  {
    name: 'Jack Sparrow',
    location: 'Salt Lake City',
    content: 'I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.',
    image: './images/comment.jpg'
  },
  {
    name: 'Martin',
    location: 'San Diego',
    content: 'Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.',
    image: './images/comment3.jpg'
  },
  {
    name: 'David Lue',
    location: 'New York',
    content: 'A Restaurant with a lovely bar and intimate dining area. Food is sensational, exciting, highly innovative, the service is friendly & professional.',
    image: './images/comment4.jpg'
  },
  {
    name: 'Natasha D',
    location: 'New York',
    content: 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.',
    image: './images/comment2.jpg'
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Testimonial">
        <h1 id='testi'>TESTIMONIAL</h1>
      <h1 id="Our">Our Clients Say</h1>
      <p id="Love">We love to hear customers, so please leave a comment or say hello in an email.</p>
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="testContainer" key={index} style={{ width: '50%' }}>
              <div className="test">
                <div className="ImgName">
                  <img src={testimonial.image} alt="First" />
                  <div className="NameLoc">
                    <h1 id="Name1">{testimonial.name}</h1>
                    <label id="Loaction11">{testimonial.location}</label>
                  </div>
                </div>
                <p id="Content11">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {[...Array(Math.ceil(testimonials.length / 2)).keys()].map((index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => updateCarousel(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
