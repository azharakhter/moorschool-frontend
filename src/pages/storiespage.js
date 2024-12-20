import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BreadcrumbSection } from '../sections/BreadcrumbSection';




import React from "react";
import { CustomerSucessSection } from '../sections/CustomerSucessSection';
import { ClientReviewGoogle } from '../sections/ClientReviewGoogle';

export const StoriesPage = () => {
  return (
    <div>
       <Header />
        
          <BreadcrumbSection  pageName="Successful Stories & Reviews"/>
      <CustomerSucessSection />
      <ClientReviewGoogle />
      
         <div className='mt-5'></div>
          <Footer/>
    </div>
  );
};


