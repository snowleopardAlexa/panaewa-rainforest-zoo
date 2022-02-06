import { useState } from 'react';
import './slider.scss';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(1)
  
  const nextSlider = () => {

  }

  const prevSlide = () = {
    
  }

  return (
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          <div className="slider">
            <img
              src={process.env.PUBLIC_URL + `/img/img${index +1}.jpg`}
              alt=""
            />
          </div>
        })}
        <BtnSlider />
      </div>
  );
};

export default Slider;
