import React from 'react';
import { useAnimation } from '../../../hooks/useAnimation'; 
import { style } from 'framer-motion/client';

interface AchievementCardProps {
  iconSrc: string; 
  iconAlt: string;
  title: string;
  animationDelay?: number;
}

  const styles = `
  .hover-scale:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

// Añade el estilo al componente
const AchievementCard: React.FC<AchievementCardProps> = ({ iconSrc, iconAlt, title, animationDelay = 0 }) => {
  const { ref, style, animationClass } = useAnimation({ variant: 'fadeInUp', delay: animationDelay });

  return (
    <>
      <style>{styles}</style>
      <div
        ref={ref}
        style={style}
        className={`flex flex-col items-center p-6 bg-white rounded-lg shadow-lg text-center ${animationClass} hover-scale`}
      >
        <img src={iconSrc} alt={iconAlt} className="w-16 h-16 mb-4 text-blue-600" />
        <h4 className="text-md font-semibold text-gray-800 uppercase">{title}</h4>
      </div>
    </>
  );
};

const AchievementsSection: React.FC = () => {
  const { ref: sectionRef, style: sectionStyle, animationClass: sectionAnimationClass } = useAnimation({ variant: 'fadeIn' });
  const { ref: titleRef, style: titleStyle, animationClass: titleAnimationClass } = useAnimation({ variant: 'slideDown', delay: 200 });
  const { ref: paragraphRef, style: paragraphStyle, animationClass: paragraphAnimationClass } = useAnimation({ variant: 'slideUp', delay: 400 });

  const cardData = [
    {
      iconSrc: '/public/images/unlock.svg',
      iconAlt: 'Unlock Potential Icon',
      title: "UNLOCK BLOCKCHAIN'S POTENTIAL",
      delay: 600,
    },
    {
      iconSrc: '/public/images/stats.svg',
      iconAlt: 'Empowerment Icon',
      title: 'EXPERIENCE TRUE EMPOWERMENT',
      delay: 800,
    },
    {
      iconSrc: '/public/images/solutions.svg',
      iconAlt: 'Innovative Solutions Icon',
      title: 'DRIVE INNOVATIVE SOLUTIONS',
      delay: 1000,
    },
    {
      iconSrc: '/public/images/build.svg',
      iconAlt: 'Future-Proof Strategy Icon',
      title: 'BUILD A FUTURE-PROOF STRATEGY',
      delay: 1200,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ ...sectionStyle, backgroundColor: '#f0f4f8' }}
      className={`py-16 md:py-24 px-4 bg-gradient-to-b from-black via-sky-700 to-sky-100 sm:px-6 lg:px-8 ${sectionAnimationClass}`}
      id="achievements" 
    >
      <div className="max-w-7xl mx-auto">
        {/* Sección Superior: Título y Párrafo */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Columna Izquierda: Títulos */}
          <div
            ref={titleRef}
            style={titleStyle}
            className={titleAnimationClass}
          >
            <h2
              className="text-4xl md:text-7xl font-bold mb-2"
              style={{ fontFamily: "'northwell-Alt', cursive", color: '#33ceff' }}
            >
              What Will You Achieve
            </h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-50 uppercase mb-4">
              BY GETTING INVOLVED?
            </h3>
            <p className="text-lg text-gray-100">
              I'm here to empower your business and drive innovation.
            </p>
          </div>

          {/* Columna Derecha: Párrafo Principal */}
          <div
            ref={paragraphRef}
            style={paragraphStyle}
            className={paragraphAnimationClass}
          >
            <p className="text-lg text-gray-50 leading-relaxed">
              By combining my expertise in blockchain and business
              development, I empower organizations to embrace the future of
              digital transformation and achieve long-term success.
            </p>
          </div>
        </div>

        {/* Sección Inferior: Tarjetas de Logros */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cardData.map((card, index) => (
            <AchievementCard
              key={index}
              iconSrc={card.iconSrc}
              iconAlt={card.iconAlt}
              title={card.title}
              animationDelay={card.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;