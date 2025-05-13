import React from 'react';
import { motion } from 'framer-motion';
import '../../../global.css'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 }
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const paragraphVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  },
};

const InfoSection: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-center space-y-12">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        custom={0}
      >
        <h1 className="text-5xl font-bold leading-snug">
         What will you be able to do if you get involved?{' '}
          <span className="text-8xl text-sky-400 font-[northwell]">you get involved?</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          In a world rapidly evolving towards digital currency and blockchain innovations,
          the average person faces a daunting challenge. But within this challenge lies
          enormous opportunity for financial growth.
        </p>
      </motion.div>

      {/* Section 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        custom={1}
      >
        <div className="relative">
          <motion.img
            src="/public/images/Tomas2.svg"
            alt="Leverage Blockchain"
            className="rounded-xl"
            variants={imageVariants}
          />
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-100 to-transparent"></div>
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-7xl font-semibold font-[northwell-Alt] text-blue-800">Grow Your Business</h2>
          <motion.p
            className="mt-2 text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
            custom="left"
          >
            Leverage blockchain to unlock new opportunities and drive growth. Create sustainable business models and expand your reach in the digital world.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        custom={2}
      >
        <div className="text-left">
          <h2 className="text-5xl font-semibold font-[northwell-Alt] text-blue-800">Make a Lasting Impact</h2>
          <motion.p
            className="mt-2 text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
            custom="right"
          >
            Develop blockchain solutions that solve real-world challenges.
            Empower industries with innovative technologies for lasting change.
          </motion.p>
        </div>
        <div className="relative">
          <motion.img
            src="/public/images/Tomas4.svg"
            alt="Experience Freedom"
            className="rounded-xl"
            variants={imageVariants}
          />
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-100 to-transparent"></div>
          </div>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        custom={3}
      >
        <div className="relative">
          <motion.img
            src="/public/images/Tomas6.svg"
            alt="Create Real Impact"
            className="rounded-xl"
            variants={imageVariants}
          />
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-100 to-transparent"></div>
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-7xl font-semibold font-[northwell-Alt] text-blue-800">Secure Your Success</h2>
          <motion.p
            className="mt-2 text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paragraphVariants}
            custom="left"
          >
            Build a strategy with blockchain that ensures long-term success.
            Secure your future with proven strategies and consistent growth.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default InfoSection;
