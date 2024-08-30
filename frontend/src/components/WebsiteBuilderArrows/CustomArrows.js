import React from 'react';

const CustomPrevArrow = ({ className, onClick }) => (
    <div className={`${className} home-website-slick-prev`} onClick={onClick} />
);

const CustomNextArrow = ({ className, onClick }) => (
    <div className={`${className} home-website-slick-next`} onClick={onClick} />
);

export { CustomPrevArrow, CustomNextArrow };
