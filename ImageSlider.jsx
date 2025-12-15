import React from 'react';

const ImageSlider = () => {
  return (
    <div className="slider-container mt-5">
      <div className="slider">
        <img src="https://picsum.photos/600/400?1" alt="slide 1" />
        <img src="https://picsum.photos/600/400?2" alt="slide 2" />
        <img src="https://picsum.photos/600/400?3" alt="slide 3" />
        <img src="https://picsum.photos/600/400?4" alt="slide 4" />
      </div>
    </div>
  );
};

export default ImageSlider;