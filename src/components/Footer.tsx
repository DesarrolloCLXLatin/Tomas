import React from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { Twitter, Linkedin, Instagram, Github, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const { ref, animationClass } = useAnimation({
    variant: 'fadeIn',
    threshold: 0.1,
  });

  return (
    <footer ref={ref} className={`bg-slate-900 text-white ${animationClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="../../public/images/LogoFooter.png" alt="Logo" />
            </div>
            <p className="text-slate-400 text-sm">
              Pioneering the future of business through innovative blockchain solutions and expert consultation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-custom-200 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-custom-200 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Smart Contracts',
                'DeFi Solutions',
                'Security Audits',
                'Enterprise Blockchain',
                'Consulting',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-custom-200 text-sm flex items-center group">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {['Blog', 'Case Studies', 'Documentation', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-custom-200 text-sm flex items-center group">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Stay updated with the latest in blockchain technology and industry insights.
            </p>
            <form className="sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border border-slate-700 bg-slate-800 py-2 px-4 text-base text-white placeholder-slate-500 focus:border-custom-400 focus:outline-none focus:ring-1 focus:ring-custom-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-custom-400 hover:bg-custom-300 py-2 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-custom-400 focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center sm:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Tomás Pérez Quevedo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
