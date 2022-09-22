import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Spinner} from "./components";
import ScrollTop from "./hoc/ScrollTop";
import Profile from "./page/Profile/Profile";
import ProfileOverview from "./page/ProfileOverview/ProfileOverview";

const Home = lazy(() => import("./page/Home/Home"));
const LoginIn = lazy(()=> import("./page/Login"));
const LoginUp = lazy(()=> import("./page/Login/LoginUp"));
const userInfo = lazy(()=>import("./page/comeSystem/comeSystem"));
const NotFound = lazy(() => import("./page/404"));
const Education = lazy(()=>import("./page/Education/eduction"));
const Qualification = lazy(()=>import("./page/Qualification/qualification"));
const Work = lazy(()=>import("./page/Work/work"))


const routes = [
  { path: "/register", element: LoginIn },
  { path: "/login", element: LoginUp },
  { path: "/userInfo", element: userInfo },
  { path: "", element: Home },
  { path: "/profile", element: Profile },
  { path: "/profileOverview", element: ProfileOverview },
  { path: "/education", element: Education },
  { path: "/qualification", element: Qualification },
  { path: "/work", element: Work },
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