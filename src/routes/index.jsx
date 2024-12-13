import { Route, Routes } from "react-router-dom";
import { RouteDate } from "./website-routes";
import { HomePage } from "../pages/homepage";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const renderRoutes = (routes) => {
    return routes.map(({ path, element, title, children }) => (
        <>
            <Route key={title} path={`/${path}`} element={element} />
            {children && renderRoutes(children)}
        </>
    ));
};

const Router = () => {
    return (
        <Routes>
            {renderRoutes(RouteDate)}
            <Route path="*" element={<HomePage/>} />
        </Routes>
    );
};

export default Router;
