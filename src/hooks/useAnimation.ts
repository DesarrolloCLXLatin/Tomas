import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'none';

interface UseAnimationOptions {
  variant?: AnimationVariant;
  threshold?: number;
  delay?: number;
  once?: boolean;
}

export const useAnimation = ({
  variant = 'fadeIn',
  threshold = 0.1,
  delay = 0,
  once = true,
}: UseAnimationOptions = {}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        if (once) setHasAnimated(true);
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (!inView && !once && hasAnimated) {
      setIsVisible(false);
    }
  }, [inView, delay, once, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (variant) {
      case 'fadeIn':
        return 'animate-fade-in';
      case 'slideUp':
        return 'animate-slide-up';
      case 'slideDown':
        return 'animate-slide-down';
      case 'slideLeft':
        return 'animate-slide-left';
      case 'slideRight':
        return 'animate-slide-right';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'none':
        return 'opacity-100';
      default:
        return 'animate-fade-in';
    }
  };

  return {
    ref,
    inView,
    isVisible,
    animationClass: getAnimationClass(),
    style: {
      opacity: variant === 'none' ? 1 : 0,
      animationDelay: `${delay}ms`,
      animationFillMode: 'forwards',
    },
  };
};