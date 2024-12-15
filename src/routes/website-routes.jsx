import { HomePage } from "../pages/homepage";
import { AboutPage } from "../pages/aboutpage";
import { ServicePagePage } from "../pages/servicespage";

export const RouteDate = [
    {
        path: "",
        element: <HomePage />,
        title:"HomePage"
    },
    {
        path: "/about",
        element: <AboutPage />,
        title:"AboutPage"
    },
    {
        path: "/services",
        element: <ServicePagePage />,
        title:"ServicePagePage"
    }  
    

]
