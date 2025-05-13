import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Layers, Globe, Zap } from 'lucide-react';

const StrategiesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 },
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const strategies = [
    {
      icon: <Layers size={32} className="text-blue-500" />,
      title: "Blockchain Integration",
      description: "Custom solutions to seamlessly integrate blockchain technologies into your existing business infrastructure."
    },
    {
      icon: <Globe size={32} className="text-green-500" />,
      title: "Web 3.0 Development",
      description: "Build future-ready applications and platforms leveraging the power of decentralized web technologies."
    },
    {
      icon: <Zap size={32} className="text-purple-500" />,
      title: "Digital Transformation",
      description: "Comprehensive strategies to evolve your business model for success in the decentralized economy."
    }
  ];

  return (
    <motion.div
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-blue-600 mb-4 font-[HelloSanttiny]"
            variants={textVariants}
          >
            Strategies
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl font-medium text-gray-800 mb-6 tracking-wider"
            variants={textVariants}
          >
            FOR SUCCESS IN A DECENTRALIZED WORLD
          </motion.h3>
          <motion.div 
            className="h-1 w-24 bg-blue-600 mx-auto mb-8"
            variants={textVariants}
          />
          <motion.p
            className="text-lg text-gray-700 mb-0"
            variants={textVariants}
          >
            Empowering businesses to achieve success through innovative blockchain and Web 3.0 solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden p-8 flex flex-col"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="mb-6">{strategy.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{strategy.title}</h4>
              <p className="text-gray-600 flex-grow">{strategy.description}</p>
              <motion.div 
                className="mt-6 flex items-center text-blue-600 font-medium cursor-pointer"
                whileHover={{ x: 5 }}
              >
                Learn more <ChevronRight size={18} className="ml-1" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                variants={textVariants}
              >
                Why Act Now?
              </motion.h3>
              <motion.p
                className="text-blue-100 mb-6"
                variants={textVariants}
              >
                The blockchain revolution is reshaping every industry. Businesses that adapt early gain competitive advantages through:
              </motion.p>
              <ul className="text-blue-100 space-y-3 mb-8">
                <motion.li variants={textVariants} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Enhanced security and transparency in operations</span>
                </motion.li>
                <motion.li variants={textVariants} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Access to new markets and revenue streams</span>
                </motion.li>
                <motion.li variants={textVariants} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Cost reduction through process optimization</span>
                </motion.li>
              </ul>
              <motion.button
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300 flex items-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Book a Consultation <ChevronRight size={18} className="ml-2" />
              </motion.button>
            </div>
            <div className="relative h-36 md:h-auto">
              <img
                src="/images/BN1.svg"
                alt="Blockchain technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-2xl md:text-6xl font-[HelloSanttiny] font-bold text-blue-600 mb-6"
            variants={textVariants}
          >
            What happens if you do nothing?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            variants={textVariants}
          >
            As blockchain technology reshapes the global economy, failing to adapt could leave your business behind. Don't miss the opportunity to position yourself at the forefront of this digital revolution.
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg flex items-center mx-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            GET STARTED TODAY <ChevronRight size={20} className="ml-2" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default StrategiesSection;