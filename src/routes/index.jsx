import { Route, Routes } from "react-router-dom";
import { RouteDate } from "./website-routes";
import { HomePage } from "../pages/homepage";

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
