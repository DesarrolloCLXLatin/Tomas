import React, { useState, useRef, useEffect } from 'react';
import { useAnimation } from '../../../hooks/useAnimation';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    role: 'CTO',
    company: 'FinTech Solutions',
    content: 'Tomás expertise in blockchain technology has been instrumental in modernizing our financial infrastructure. His guidance helped us implement secure and efficient blockchain solutions.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'CEO',
    company: 'Supply Chain Innovations',
    content: 'Working with Tomás transformed our supply chain management. His deep understanding of blockchain technology and its practical applications has given us a competitive edge.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martinez',
    role: 'Director of Operations',
    company: 'Global Logistics Corp',
    content: 'Tomás ability to simplify complex blockchain concepts and provide practical solutions has been invaluable. His consulting has helped us streamline our operations significantly.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimerRef = useRef<number | null>(null);

  const titleAnimation = useAnimation({ variant: 'fadeIn' });
  const cardAnimation = useAnimation({ variant: 'scaleIn', delay: 300 });

  useEffect(() => {
    slideTimerRef.current = window.setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 6000);

    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== activeIndex) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 500);

      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
        slideTimerRef.current = window.setInterval(() => {
          if (!isAnimating) {
            setIsAnimating(true);
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setTimeout(() => setIsAnimating(false), 500);
          }
        }, 6000);
      }
    }
  };

  const goToPrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-custom-100/20 dark:bg-custom-400/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`max-w-3xl mx-auto mb-16 text-center ${titleAnimation.animationClass}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-custom-400 to-custom-200 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See how blockchain solutions have transformed businesses across sectors.
          </p>
        </div>

        <div
          ref={cardAnimation.ref}
          className={`relative max-w-4xl mx-auto ${cardAnimation.animationClass}`}
        >
          <div className="relative overflow-hidden">
            <div
              className="
                transition-all duration-500 ease-in-out flex
              "
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="
                    bg-gray-50 dark:bg-slate-700 rounded-2xl p-8 md:p-10
                    shadow-lg border border-gray-100 dark:border-slate-600
                    relative
                  ">
                    <Quote className="absolute top-4 right-4 h-10 w-10 text-gray-200 dark:text-slate-600" />
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 object-cover rounded-full border-2 border-white dark:border-slate-500 shadow-md"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{testimonial.role}, {testimonial.company}</p>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-200 text-lg italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevSlide}
              className="
                p-2 rounded-full bg-white dark:bg-slate-700 shadow-md
                text-gray-600 dark:text-gray-300
                hover:text-custom-400 dark:hover:text-custom-200
                focus:outline-none focus:ring-2 focus:ring-custom-400
                transition-all duration-300
              "
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                      index === activeIndex
                        ? 'bg-custom-400 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-custom-200 dark:hover:bg-custom-300'
                    }
                  `}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNextSlide}
              className="
                p-2 rounded-full bg-white dark:bg-slate-700 shadow-md
                text-gray-600 dark:text-gray-300
                hover:text-custom-400 dark:hover:text-custom-200
                focus:outline-none focus:ring-2 focus:ring-custom-400
                transition-all duration-300
              "
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
