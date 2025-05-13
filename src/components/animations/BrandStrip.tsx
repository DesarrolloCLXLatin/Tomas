import React from 'react';
import { motion } from 'framer-motion';

const iconData = [
  { src: '/images/aventus.svg', alt: 'Icono de Aventus' },
  { src: '/images/truth.svg', alt: 'Icono de Blockchainfactory' },
  { src: '/images/GAMES.svg', alt: 'Icono de CWE-Booster' },
  { src: '/images/galactic.svg', alt: 'Icono de Galactic' },
];

const zoomVariants = {
  initial: { scale: 1 },
  animate: (index) => ({
    scale: [1, 1.2, 1], // Zoom in and out
    transition: {
      delay: index * 0.2, // Delay each icon's animation by 0.2 seconds
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity, // Make the animation infinite
      repeatDelay: 1 // Delay before repeating the animation
    }
  }),
};

const BrandStrip = () => {
  return (
    <div className="relative w-full py-12 px-4 bg-gradient-to-b from-sky-100 via-sky-700 to-black dark:from-sky-900 dark:to-black">
      {/* Decorative elements */}
      <div className="absolute -top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-100/20 dark:bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-80">
        {iconData.map((icon, index) => {
          const content = (
            <>
              <img src={icon.src} alt={icon.alt} className="w-40" />
              <span className="mt-3 text-center text-white text-lg font-medium">
                {icon.text}
              </span>
            </>
          );

          return (
            <motion.div
              key={icon.alt}
              custom={index}
              variants={zoomVariants}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center"
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandStrip;
