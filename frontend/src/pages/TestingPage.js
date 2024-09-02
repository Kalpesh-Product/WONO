import React from 'react';
import Slider from 'react-slick';
import '../styles/steppersStyle.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestingPage = () => {
  // Slider settings
  const settings = {
    centerMode: true,
    centerPadding: '100px', // Adjust padding as needed
    slidesToShow: 3, // Number of slides to show
    infinite: true,
    speed: 500,
    arrows: true, // Show next/prev arrows
    dots: true, // Show dots for navigation
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <h3>Slide 1</h3>
        </div>
        <div className="slider-item">
          <h3>Slide 2</h3>
        </div>
        <div className="slider-item">
          <h3>Slide 3</h3>
        </div>
        <div className="slider-item">
          <h3>Slide 4</h3>
        </div>
        <div className="slider-item">
          <h3>Slide 5</h3>
        </div>
      </Slider>
    </div>
  );
};

export default TestingPage;
