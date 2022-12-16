import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spinner } from "./components";
import Profile from "./page/Profile/Profile";
import ProtectedRoute from "./utils/ProtectedRoute";

const Home = lazy(() => import("./page/Home/Home"));
const Passports = lazy(() => import("./page/Login"));
const LogOut = lazy(() => import("./page/Login/components/logOut"));
const LoginIn = lazy(() => import("./page/Login/LoginIn"));
const Register = lazy(() => import("./page/register/register"));
const NotFound = lazy(() => import("./page/404"));
const Education = lazy(() => import("./page/Education/eduction"));
const Qualification = lazy(() => import("./page/Qualification/qualification"));
const AllInfo = lazy(() => import("./page/AllInformation/allInformation"));
const ProfileOverview = lazy(() =>
  import("./page/ProfileOverview/ProfileOverview")
);
const Portfolio = lazy(() => import("./page/Portfolio/portfolio"));
const Certificates = lazy(() => import("./page/Certificates/certificates"));
const Work = lazy(() => import("./page/Works/works"));
const AdminProfile = lazy(() => import("./page/admin/adminProfile"));
const Direction = lazy(() => import("./page/Direction/direction"));
const AllPdf = lazy(() => import("./page/InformationAllPdf/informationAllPdf"));
const CheckPdf = lazy(() =>
  import("./page/admin/components/CheckPdf/checkPdf")
);
const CheckUser = lazy(() =>
  import("./page/admin/components/CheckUser/CheckUser")
);
const CheckInfo = lazy(() =>
  import("./page/admin/components/CheckAllInformation/checkAllInformation")
);

const publicRoutes = [
  {
    path: "/passport",
    element: <Passports />,
  },
  {
    path: "/loginIn",
    element: <LoginIn />,
  },
  {
    path: "/logOut",
    element: <LogOut />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
];

const privateRoutes = [
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/allInfo/:id",
    element: <AllInfo />,
  },
  {
    path: "/adminProfile",
    element: <AdminProfile />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/certificates",
    element: <Certificates />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/profileOver/:id",
    element: <ProfileOverview />,
  },
  {
    path: "/qualification",
    element: <Qualification />,
  },
  {
    path: "/direction/:id",
    element: <Direction />,
  },
  {
    path: "/allPdf/:id",
    element: <AllPdf />,
  },
  {
    path: "/adminProfile/checkPdf/:id",
    element: <CheckPdf />,
  },
  {
    path: "/adminProfile/checkUser/:id",
    element: <CheckUser />,
  },
  {
    path: "/adminProfile/checkInfo/:id",
    element: <CheckInfo />,
  },
];

const RoutesContainer = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner position="full" />}>
        <Routes>
          {publicRoutes?.map((route, idx) => (
            <Route
              key={route.path + idx}
              path={route.path}
              element={route.element}
            />
          ))}
          {privateRoutes?.map((route, idx) => (
            <Route
              key={route?.path + idx}
              path={route.path}
              element={<ProtectedRoute>{route?.element}</ProtectedRoute>}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
export default RoutesContainer;
