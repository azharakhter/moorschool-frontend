import { Link } from 'react-router-dom';
// import { jwtDecode } from "jwt-decode";
// import { useEffect, useState } from 'react';
export const Header = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const token = localStorage.getItem('jwtToken');
    //     if (token) {
    //         const decodedToken = jwtDecode(token);
    //         const userId = decodedToken ? decodedToken.userId : null;
    //         setIsLoggedIn(!!userId);
    //     } else {
    //         setIsLoggedIn(false);
    //     }
    // }, []);

    return (
      <>
     {/* <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
     <div className="container">
       <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
         <div className="col-lg-6 text-center text-lg-start mb-lg-0">
           <div className="d-flex flex-wrap">
             <a href="#" className="text-muted me-4">
               <i className="fas fa-map-marker-alt text-primary me-2"></i>WaterFold
             </a>
             <a href="tel:+01234567890" className="text-muted me-4">
               <i className="fas fa-phone-alt text-primary me-2"></i>+01234567890
             </a>
             <a href="mailto:example@gmail.com" className="text-muted me-0">
               <i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com
             </a>
           </div>
         </div>
         <div className="col-lg-6 text-center text-lg-end">
           <div className="d-flex align-items-center justify-content-end">
             <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
               <i className="fab fa-facebook-f"></i>
             </a>
             <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
               <i className="fab fa-twitter"></i>
             </a>
             <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
               <i className="fab fa-instagram"></i>
             </a>
             <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0">
               <i className="fab fa-linkedin-in"></i>
             </a>
           </div>
         </div>
       </div>
     </div>
   </div> */}

   <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
     <div className="container">
       <nav className="navbar navbar-expand-lg navbar-light">
         <a href="#" className="navbar-brand p-0">
           <h1 className="display-6 text-primary">
             <i className="fas fa-car-alt me-3"></i>Moors Driving School
           </h1>
         </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
           <span className="fa fa-bars"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarCollapse">
           <div className="navbar-nav mx-auto py-0">
             <a href="#" className="nav-item nav-link active">
               Home
             </a>
             <a href="#" className="nav-item nav-link">
               About
             </a>
             <a href="#" className="nav-item nav-link">
               Service
             </a>
             {/* <a href="#" className="nav-item nav-link">
               Blog
             </a> */}
             {/* <div className="nav-item dropdown">
               <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                 Pages
               </a>
               <div className="dropdown-menu m-0">
                 <a href="#" className="dropdown-item">
                   Our Feature
                 </a>
                 <a href="#" className="dropdown-item">
                   Our Cars
                 </a>
                 <a href="#" className="dropdown-item">
                   Our Team
                 </a>
                 <a href="#" className="dropdown-item">
                   Testimonial
                 </a>
                 <a href="#" className="dropdown-item">
                   404 Page
                 </a>
               </div>
             </div> */}
             {/* <a href="#" className="nav-item nav-link">
               Contact
             </a> */}
           </div>
           <a href="#" className="btn btn-primary rounded-pill py-2 px-4">
             WhatsApp Call
           </a>
         </div>
       </nav>
     </div>
   </div>
     </>

      );
}