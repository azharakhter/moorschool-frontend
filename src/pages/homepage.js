import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { HeroSection } from '../sections/HeroSection';
import { FormSection } from '../sections/FormSection';
import { AboutSection } from '../sections/AboutSection';
// import { OfferSection } from '../sections/OfferSection';
import { ServicesSection } from '../sections/ServicesSection';
import { AdsSection } from '../sections/AdsSection';
import { ServicesCountSection } from '../sections/SerivcesCountSection';


export const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <FormSection />
            {/* <OfferSection/> */}
            <AboutSection />
            <ServicesSection />
            <AdsSection />
            <ServicesCountSection />
            <Footer />


        </>
    )
}