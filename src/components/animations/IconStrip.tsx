import React from 'react';
import { motion } from 'framer-motion';

const iconData = [
  { src: '/images/Grow.svg', alt: 'Icono de crecimiento', text: 'Grow Your Business' },
  { src: '/images/impact.svg', alt: 'Icono de impacto', text: 'Make a Lasting Impact' },
  { src: '/images/exito.svg', alt: 'Icono de éxito', text: 'Secure Your Success' },
];

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.3, duration: 0.2 } },
};

const slideVariants = (direction: 'left' | 'right') => ({
  initial: { x: direction === 'left' ? -50 : 50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
});

const IconStrip = () => {
  return (
    <div className="relative w-full py-12 px-4 bg-gradient-to-b from-black via-sky-700 to-sky-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-black"></div>
      <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-100/20 dark:bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-80">
        {iconData.map((icon, index) => {
          const isAnimated = index !== 1;
          const direction = index === 0 ? 'left' : 'right';

          const content = (
            <>
              <img src={icon.src} alt={icon.alt} className="w-20 h-20" />
              <motion.span
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="mt-3 text-center text-white text-lg font-medium"
              >
                {icon.text}
              </motion.span>
            </>
          );

          return isAnimated ? (
            <motion.div
              key={icon.text}
              variants={slideVariants(direction)}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center"
            >
              {content}
            </motion.div>
          ) : (
            <div key={icon.text} className="flex flex-col items-center text-white">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconStrip;
