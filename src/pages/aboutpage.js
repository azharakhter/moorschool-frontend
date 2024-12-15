import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { AboutSection } from '../sections/AboutSection';
import { BreadcrumbSection } from '../sections/BreadcrumbSection';




import React from "react";

export const AboutPage = () => {
  return (
    <div>
       <Header />
        
          <BreadcrumbSection  pageName="About Us"/>
          <AboutSection />

          <Footer/>
    </div>
  );
};


