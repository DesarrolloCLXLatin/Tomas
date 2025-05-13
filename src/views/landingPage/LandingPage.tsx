import React from 'react';
import CtaSection from './sections/CtaSection';
import CardSection from './sections/cardSection';
import StrategiesSection from './sections/strategieSection';
import MissionSection from './sections/missionSection';
import FeaturesSection from './sections/FeaturesSection';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import TestimonialsSection from './sections/TestimonialsSection';
import InfoSection from './sections/InfoSection';
import IconStrip from '../../components/animations/IconStrip';
import BrandStrip from '../../components/animations/BrandStrip';
import BrandIIStrip from '../../components/animations/BrandIIStrip';

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <IconStrip/>
      <InfoSection />
      <BrandStrip/>
      <AboutSection />
      <CardSection />
      <FeaturesSection />
      <BrandIIStrip/>
      <MissionSection />
      <StrategiesSection />
      <CtaSection />
      <TestimonialsSection />
    </div>
  );
};

export default LandingPage;