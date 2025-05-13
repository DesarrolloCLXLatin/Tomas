import React, { useState, useEffect, useRef } from 'react';
import { useAnimation } from '../../../hooks/useAnimation';

const MissionSection: React.FC = () => {
  const { ref: sectionRef, style: sectionStyle, animationClass: sectionAnimationClass } = useAnimation({ variant: 'fadeIn' });
  const { ref: contentRef, style: contentStyle, animationClass: contentAnimationClass } = useAnimation({ variant: 'zoomIn', delay: 300 });

  const backgroundPlexusImageUrl = '/images/123.jpg';

  const fullText = "EMPOWERING YOUR BUSINESS FOR THE FUTURE";
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const h3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (contentAnimationClass && typedText.length < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 100); 

      return () => clearTimeout(typingTimeout);
    } else if (typedText.length === fullText.length && !isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [typedText, fullText, contentAnimationClass, isTypingComplete]);


  return (
    <section
      ref={sectionRef}
      style={{
        ...sectionStyle,
        backgroundImage: `url(${backgroundPlexusImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={`relative py-20 md:py-32 flex items-center justify-center text-center text-white ${sectionAnimationClass}`}
      id="mission"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div
        ref={contentRef}
        style={contentStyle}
        className={`relative z-10 max-w-3xl mx-auto px-4 ${contentAnimationClass}`}
      >
        <h2
          className="text-3xl md:text-9xl font-bold mb-3"
          style={{ fontFamily: "'northwell', cursive", color: '#33ceff' }}
        >
          My Mission
        </h2>
        <h3
          ref={h3Ref}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-8 tracking-wide min-h-[3em] md:min-h-[2.5em]" // Añadido min-h para evitar saltos de layout
        >
          {typedText}
          {/* Blinking cursor */}
          {!isTypingComplete && (
            <span className="inline-block w-[2px] h-[1em] bg-white animate-blink ml-1 relative -top-1"></span>
          )}
        </h3>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-custom-400 to-custom-200 text-white font-semibold uppercase py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Let's Build It Together
        </a>
      </div>
    </section>
  );
};

export default MissionSection;