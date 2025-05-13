import React, { useEffect, useState } from 'react';
import { useAnimation } from '../../../hooks/useAnimation';
import { PlayCircle, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const titleAnimation = useAnimation({ variant: 'slideDown', delay: 300 });
  const subtitleAnimation = useAnimation({ variant: 'fadeIn', delay: 600 });
  const ctaAnimation = useAnimation({ variant: 'slideUp', delay: 900 });
  const imageAnimation = useAnimation({ variant: 'scaleIn', delay: 600 });

  const [typedText, setTypedText] = useState('');
  const fullText = 'Blockchain Innovation';
  const typingSpeed = 100; // ms per character

  useEffect(() => {
    if (titleAnimation.isVisible) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [titleAnimation.isVisible]);

  return (
    <section
      id="home"
      className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden"
      style={{
        backgroundImage: "url('/public/images/section2.gif')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para mejorar la legibilidad del texto */}

      <div className="relative z-10 -bottom-12 -mb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div ref={titleAnimation.ref} className={titleAnimation.animationClass}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-100 dark:text-white">
                Pioneering the Future with <span className="bg-gradient-to-r from-custom-400 to-custom-200 bg-clip-text text-transparent">{typedText}
                <span className="animate-pulse">|</span>
                </span>
              </h1>
            </div>

            <div ref={subtitleAnimation.ref} className={subtitleAnimation.animationClass}>

            </div>

            <div ref={ctaAnimation.ref} className={`flex flex-col sm:flex-row gap-4 ${ctaAnimation.animationClass}`}>
              <a
                href="#contact"
                className="
                  px-8 py-3 text-base font-medium rounded-full text-center
                  bg-gradient-to-r from-custom-400 to-custom-200
                  text-white shadow-md hover:shadow-lg
                  transition-all duration-300 hover:scale-105
                  flex items-center justify-center
                "
              >
                Start Here
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#demo"
                className="
                  px-8 py-3 text-base font-medium rounded-full text-center
                  bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200
                  border border-gray-200 dark:border-gray-700
                  hover:bg-gray-50 dark:hover:bg-slate-700
                  transition-all duration-300
                  flex items-center justify-center
                "
              >
                <PlayCircle className="mr-2 h-5 w-5 text-custom-400" />
                Watch Overview
              </a>
            </div>
          </div>

          <div
            ref={imageAnimation.ref}
            className={`order-1 lg:order-2 relative ${imageAnimation.animationClass}`}
          >
            <div className="relative bottom-4 rounded-lg overflow-hidden">
              <img
                src="/public/images/tomas.svg"
                alt="Blockchain Technology Visualization"
                className="w-full h-auto"
              />

              <div className="absolute -bottom-36 left-8 max-w-[80%]">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Blockchain Expert</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Years of experience in blockchain innovation and implementation</p>
                </div>
              </div>
            </div>

            <div className="absolute top-36 -right-6 w-12 h-12 bg-custom-200 rounded-full opacity-70 animate-float"></div>
            <div className="absolute bottom-3 -left-4 w-8 h-8 bg-custom-400 rounded-full opacity-70" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
