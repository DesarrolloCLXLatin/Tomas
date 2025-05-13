import React, { useState, useEffect } from 'react';

const BrandIIStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const icons = [
    '/images/aisd.svg',
    '/images/aventus.svg',
    '/images/galactic.svg',
    '/images/premierx.svg',
    '/images/semays.svg',
    '/images/number.svg',
    '/images/BlockchainFactory.svg',
    '/images/CWE.svg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="w-full bg-black py-6">
      <div className="flex justify-center items-center flex-wrap gap-6">
        {icons.map((icon, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center transition-all duration-300 ${
                isActive ? 'scale-110 opacity-100' : 'opacity-50'
              }`}
              style={{
                width: '12rem',
                height: '6rem',
              }}
            >
              <img
                src={icon}
                alt={`Brand ${index + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandIIStrip;
