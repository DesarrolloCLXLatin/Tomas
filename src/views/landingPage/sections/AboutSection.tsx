import React from 'react';
import { useAnimation } from '../../../hooks/useAnimation';

const AboutSection: React.FC = () => {
  const {
    ref: sectionRef,
    style: sectionStyle,
    animationClass: sectionAnimationClass,
  } = useAnimation({ variant: 'fadeIn' });

  const {
    ref: textRef,
    style: textStyle,
    animationClass: textAnimationClass,
  } = useAnimation({ variant: 'slideUp', delay: 300 });

  // Animación para la nueva sección de la imagen
  const {
    ref: imageContentRef,
    style: imageContentStyle,
    animationClass: imageContentAnimationClass,
  } = useAnimation({ variant: 'fadeIn', delay: 600 }); // Un delay adicional para que aparezca después

  return (
    <section
      ref={sectionRef}
      style={{
        ...sectionStyle,
        backgroundImage: "url('/images/section3.gif')",
        backgroundSize: '100% 100%', // Cambiado para cubrir completamente si es necesario, o 'cover'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={`relative flex flex-col items-center justify-center px-1 mx-auto overflow-hidden pt-16 pb-10 md:pt-24 md:pb-10 ${sectionAnimationClass}`} // Ajustado el padding inferior
      id="about"
    >
      {/* Contenido original en foreground */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center md:space-x-8 px-4"> {/* Añadido px-4 para un poco de padding lateral */}
        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center mb-8 md:mb-0"> {/* Ajustado el ancho para mejor distribución */}
          <img
            src="/images/Tomas5.svg"
            alt="Tomás Pérez Quevedo"
            className="w-full max-w-md md:max-w-lg object-contain rounded-xl" // Ajustado max-w para diferentes pantallas
          />
        </div>

        <div
          ref={textRef}
          style={textStyle}
          className={`relative z-10 w-full md:w-1/2 lg:w-3/5 text-left space-y-4 ${textAnimationClass}`} // Ajustado el ancho y space-y
        >
          <div className="flex items-center gap-2"> {/* Ajustado gap */}
            <img
              src="/images/Logo.svg"
              alt="Logo"
              className="w-52 h-52 md:w-52 md:h-52" // Ajustado tamaño del logo
            />
          </div>

          <p className="text-base md:text-lg text-gray-100" style={{ lineHeight: '1.6' }}> {/* Ajustado line-height y text-size */}
            With over <strong>two decades of experience</strong> in the world of business,{' '}
            <strong>Tomás Pérez Quevedo</strong> is a <strong>visionary entrepreneur</strong> and{' '}
            <strong>founder of BlockchainFactory.io</strong>, a leading platform in{' '}
            <strong>blockchain</strong> and <strong>Web 3.0</strong> solutions. Tomás has built a
            reputation for his leadership in the <strong>crypto</strong> space, partnering with
            innovative companies like <strong>Aventus</strong> and <strong>Galactic Markets</strong>{' '}
            to create groundbreaking blockchain technologies. His passion for{' '}
            <strong>disruptive technologies</strong> and <strong>business growth</strong> has led to
            successful ventures that continue to shape the future of the digital world.
          </p>
        </div>
      </div>
      <div
        ref={imageContentRef}
        style={imageContentStyle}
        className={`w-full flex flex-col items-center justify-center text-center px-4 ${imageContentAnimationClass}`}
      >
        <h2
          className="text-6xl md:text-6xl font-bold mb-4 mt-10"
          style={{ fontFamily: "'northwell-Alt', cursive", color: '#33ceff' }}
        >
          Secure your slice of the digital revolution
        </h2>
        <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-6 text-gray-50">
          BUILD A LEGACY INSTEAD OF JUST WATCHING IT HAPPEN!
        </h3>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-50">
          <p className="text-lg md:text-xl">
            As the world shifts towards blockchain, decentralized finance, and Web 3.0, many entrepreneurs ask:
          </p>
          <p className="text-lg md:text-xl font-bold">
            How do I navigate this evolving digital landscape?
          </p>
          <p className="text-md md:text-lg italic">
            "This challenge presents a unique opportunity for growth in the modern economy. Embrace the power of blockchain and start shaping your financial future. Learn how to unlock its potential and position your business for long-term success".
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
