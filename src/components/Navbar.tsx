import React, { useState, useEffect } from 'react';
import { useScroll } from '../context/ScrollContext';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState('/public/images/Logo.svg');
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsScrolled(scrollY > 10);
    // Cambia la imagen cuando el scroll es mayor a 100 (ajusta según necesites)
    if (scrollY > 100) {
      setCurrentImage('/public/images/Logo_2.svg');
    } else {
      setCurrentImage('/public/images/Logo.svg');
    }
  }, [scrollY]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#features' },
    { label: 'About Me', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Cambiado de h-16 a h-20 */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <img src={currentImage} alt="Logo" className="h-48 w-48 mt-4" />
            </a>
          </div>

          <nav className="hidden md:flex justify-center w-full">
            <div className="flex space-x-8 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    text-sm font-medium transition-colors px-1 py-2
                    ${isScrolled
                      ? 'text-primary-700 hover:text-cyan-400 dark:text-primary-300 dark:hover:text-cyan-200'
                      : 'text-primary-700 hover:text-cyan-400 dark:text-primary-200 dark:hover:text-cyan-200'}
                  `}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="md:hidden">
            <button
              id="menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-slate-900 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                block px-3 py-2 rounded-md text-base font-medium
                text-primary-700 hover:text-cyan-500 hover:bg-primary-50
                dark:text-primary-300 dark:hover:text-cyan-200 dark:hover:bg-slate-800
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
