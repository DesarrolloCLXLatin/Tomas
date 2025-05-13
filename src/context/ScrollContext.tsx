import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  scrollY: number;
  isScrolling: boolean;
  isScrollingUp: boolean;
  isScrollingDown: boolean;
  sections: Record<string, boolean>;
  registerSection: (id: string, isVisible: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollY: 0,
  isScrolling: false,
  isScrollingUp: false,
  isScrollingDown: false,
  sections: {},
  registerSection: () => {},
});

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [sections, setSections] = useState<Record<string, boolean>>({});
  
  // Throttle function to limit scroll event handling
  const throttle = (callback: Function, limit = 100) => {
    let waiting = false;
    return function() {
      if (!waiting) {
        callback.apply(this, arguments);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
      setIsScrolling(true);
      
      // Clear the scrolling state after a delay
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(window.scrollTimeout);
    };
  }, []);

  // Update previous scroll position after scrollY changes
  useEffect(() => {
    setPrevScrollY(scrollY);
  }, [scrollY]);

  // Register a section's visibility
  const registerSection = (id: string, isVisible: boolean) => {
    setSections(prev => ({
      ...prev,
      [id]: isVisible,
    }));
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollY,
        isScrolling,
        isScrollingUp: scrollY < prevScrollY,
        isScrollingDown: scrollY > prevScrollY,
        sections,
        registerSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};