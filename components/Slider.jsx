import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  // console.log(length);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl pt-[90px] font-bold text-center p-4">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={index === current ? '  duration-300' : 'opacity-0'}
            >
              <FaArrowCircleLeft
                className="absolute text-2xl lg:text-3xl bottom-8 right-[52%] text-white/70 cursor-pointer select-none z-[2] opacity-50 hover:opacity-100"
                onClick={() => prevSlide()}
                // size="2rem"
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="850"
                  objectFit="contain"
                />
              )}
              <FaArrowCircleRight
                className="absolute text-2xl lg:text-3xl bottom-8 left-[52%] text-white/70 cursor-pointer select-none z-[2] opacity-50 hover:opacity-100"
                onClick={() => nextSlide()}
                // size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
