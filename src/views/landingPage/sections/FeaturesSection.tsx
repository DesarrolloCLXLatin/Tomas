import React from 'react';
import { useAnimation } from '../../../hooks/useAnimation';
import {
  Layers,
  Shield,
  Zap,
  Code,
  Users,
  LineChart
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  const { ref, animationClass } = useAnimation({
    variant: 'slideUp',
    delay,
  });

  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg
        border border-gray-100 dark:border-slate-700
        transition-all duration-300 hover:-translate-y-1
        ${animationClass}
      `}
    >
      <div className="bg-gradient-to-br from-custom-400 to-custom-200 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const titleAnimation = useAnimation({ variant: 'fadeIn' });

  const features = [
    {
      title: 'Smart Contract Development',
      description: 'Custom blockchain solutions with secure, audited smart contracts for your business needs.',
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: 'DeFi Integration',
      description: 'Expert implementation of decentralized finance protocols and systems.',
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: 'Security Consulting',
      description: 'Comprehensive blockchain security audits and risk assessment services.',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable blockchain infrastructure for large-scale business operations.',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: 'DAO Governance',
      description: 'Design and implementation of decentralized autonomous organization structures.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'Performance Analytics',
      description: 'Advanced metrics and reporting for blockchain-based systems and applications.',
      icon: <LineChart className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gray-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-custom-400 to-custom-200"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleAnimation.ref}
          className={`max-w-3xl mx-auto mb-16 text-center ${titleAnimation.animationClass}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transforming Business Through <span className="md:text-6xl bg-gradient-to-r from-custom-400 to-custom-200 font-[northwell] bg-clip-text text-transparent">Blockchain</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive blockchain solutions tailored to your organization's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100 + 300}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
