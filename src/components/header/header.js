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
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <Link className="navbar-brand" href="index.html">
              Car<span>Book</span>
           </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu"></span> Menu
            </button>
    
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link href="index.html" className="nav-link">
                    Home
                 </Link>
                </li>
                <li className="nav-item">
                  <Link href="about.html" className="nav-link">
                    About
                 </Link>
                </li>
                <li className="nav-item">
                  <Link href="services.html" className="nav-link">
                    Services
                 </Link>
                </li>
                <li className="nav-item">
                  <Link href="pricing.html" className="nav-link">
                    Pricing
                 </Link>
                </li>
                <li className="nav-item">
                  <Link href="car.html" className="nav-link">
                    Cars
                 </Link>
                </li>
                <li className="nav-item">
                  <Link href="blog.html" className="nav-link">
                    Blog
                 </Link>
                </li>
                <li className="nav-item">
                  <Link href="contact.html" className="nav-link">
                    Contact
                 </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}