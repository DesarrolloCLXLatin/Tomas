import React from 'react';
import { useAnimation } from '../../../hooks/useAnimation';
import { Send, CheckCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  const sectionAnimation = useAnimation({ variant: 'fadeIn' });
  const formAnimation = useAnimation({ variant: 'slideUp', delay: 300 });

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-custom-400 to-custom-300 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-custom-200 opacity-10 rounded-full blur-3xl"></div>

      <div
        ref={sectionAnimation.ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${sectionAnimation.animationClass}`}
      >
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with Blockchain?
          </h2>
          <p className="text-xl text-custom-50">
            Schedule a consultation with Tomás to explore how blockchain technology can revolutionize your operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold mb-2">Why Choose Tomás?</h3>

              {[
                'Proven blockchain implementation expertise',
                'Customized solutions for your business',
                'Ongoing support and consultation',
                'Industry-leading security practices',
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-custom-100 flex-shrink-0 mt-0.5" />
                  <span className="text-custom-50">{point}</span>
                </div>
              ))}

              <div className="pt-4">
                <p className="text-sm text-custom-100">
                  "Tomás deep understanding of blockchain technology and its practical applications has been instrumental in our digital transformation journey."
                </p>
                <p className="text-sm font-semibold mt-2">— Carlos Mendoza, CIO</p>
              </div>
            </div>

            <div
              ref={formAnimation.ref}
              className={`lg:col-span-3 ${formAnimation.animationClass}`}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Schedule a Consultation
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-custom-400 focus:border-custom-400 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-custom-400 focus:border-custom-400 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-custom-400 focus:border-custom-400 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-custom-400 focus:border-custom-400 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      placeholder="Tell us about your blockchain project needs..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="
                        w-full px-6 py-3 text-base font-medium rounded-lg
                        bg-gradient-to-r from-custom-400 to-custom-200
                        text-white shadow-md hover:shadow-lg
                        transition-all duration-300 hover:opacity-90
                        flex items-center justify-center
                      "
                    >
                      Schedule Consultation
                      <Send className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
