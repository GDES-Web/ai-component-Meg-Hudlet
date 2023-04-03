import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ artwork }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {artwork.map((art) => (
        <div key={art.id}>
          <img src={art.image} alt={art.title} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
