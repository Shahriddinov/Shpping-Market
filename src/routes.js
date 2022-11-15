import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Spinner} from "./components";
import ScrollTop from "./hoc/ScrollTop";
import Layout from "./components/Layout/Layout";
import Profile from "./page/Profile/Profile";
import ProfileSidebar from "./components/ProfileSidebar/ProfileSidebar";

const Home = lazy(() => import("./page/Home/Home"));
const LoginIn = lazy(() => import("./page/Login"));
const LoginUp = lazy(() => import("./page/Login/LoginUp"));
const userInfo = lazy(() => import("./page/comeSystem/comeSystem"));
const NotFound = lazy(() => import("./page/404"));
const Education = lazy(() => import("./page/Education/eduction"));
const Qualification = lazy(() => import("./page/Qualification/qualification"));
const allInfo = lazy(() => import("./page/AllInformation/allInformation"));
const ProfileOverview = lazy(() => import("./page/ProfileOverview/ProfileOverview"))
const Portfolio = lazy(() => import("./page/Portfolio/portfolio"));
const Certificates = lazy(() => import("./page/Certificates/certificates"));
const Work = lazy(() => import("./page/Works/works"))
const AdminProfile = lazy(() => import("./page/admin/adminProfile"));
const Direction = lazy(() => import("./page/Direction/direction"));
const AllPdf = lazy(() => import("./page/InformationAllPdf/informationAllPdf"))


const routes = [
    {path: "/register", element: LoginIn},
    {path: "/login", element: LoginUp},
    {path: "/userInfo", element: userInfo},
    {path: "", element: Home},
    {path: "/profile", element: Profile},
    {path: "/education", element: Education},
    {path: "/allInfo", element: allInfo},
    {path: "/adminProfile", element: AdminProfile},
    {path: "/work", element: Work},
    {path: "/certificates", element: Certificates},
    {path: "/portfolio", element: Portfolio},
    {path: "/profileOver", element: ProfileOverview},
    {path: "/qualification", element: Qualification},
    {path: "/direction", element: Direction},
    {path: "/allPdf", element: AllPdf}


];
const RoutesContainer = () => (
    <Router>
        <Suspense fallback={<Spinner position="full"/>}>
            <Routes>
                {routes.map((route, key) => {
                    const RouteComponent = ScrollTop(route.element);
                    return <Route key={key} path={route.path} element={<RouteComponent/>}/>;
                })}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Suspense>
    </Router>
);
export default RoutesContainer;