import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { HeroSection } from '../sections/HeroSection';
import { FeatureSection } from '../sections/FeatureSection';
import { AboutSection } from '../sections/AboutSection';
import { TestCategoires } from '../sections/TestCategoires';
import { ServicesSection } from '../sections/ServicesSection';
import { CounterSection } from '../sections/CounterSection';
import { StepSection } from '../sections/StepSection';
import { BlogSection } from '../sections/BlogSection';
import { BannerSection } from '../sections/BannerSection';
import { TeamSection } from '../sections/TeamSection';
import { Testimonial } from '../sections/Testimonial';




import React from "react";

export const HomePage = () => {
  return (
    <div>
       <Header />
          <HeroSection />
          <FeatureSection /> 
          <AboutSection />
          <CounterSection />
          <ServicesSection />
          <TestCategoires />
          <StepSection />
          <BlogSection />
          <BannerSection />
          <TeamSection />
          <Testimonial/>

          <Footer/>
    </div>
  );
};


