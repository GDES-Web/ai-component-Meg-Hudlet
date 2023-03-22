import React from 'react';
import Carousel from './Carousel';
import artworkData from './artworkData';

const App = () => {
  return (
    <div>
      <h1>Artwork Carousel</h1>
      <Carousel artwork={artworkData} />
    </div>
  );
};

export default App;
