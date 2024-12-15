import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { ServicesSection } from '../sections/ServicesSection';
import { BreadcrumbSection } from '../sections/BreadcrumbSection';






import React from "react";

export const ServicePagePage = () => {
  return (
    <div>
      <Header />
      <BreadcrumbSection pageName="Services"/>
          <ServicesSection />
          <Footer/>
    </div>
  );
};


