import React from 'react';

function Hero({ heading, message }) {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img ">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-3rem]">
        <h2 className="text-5xl font-semibold">{heading}</h2>
        <p className="pt-10 text-xl">{message}</p>
      </div>
      {/* <button className="absolute text-sm text-white z-[2] bottom-2 right-2 px-3 py-2 border">
        Buy & Rent
      </button> */}
    </div>
  );
}

export default Hero;
