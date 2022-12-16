import React, { lazy } from "react";
import Profile from "./page/Profile/Profile";

const Home = lazy(() => import("./page/Home/Home"));
const Passports = lazy(() => import("./page/Login"));
const LogOut = lazy(() => import("./page/Login/components/logOut"));
const LoginIn = lazy(() => import("./page/Login/LoginIn"));
const Register = lazy(() => import("./page/register/register"));
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

export const publicRoutes = [
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

export const privateRoutes = [
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/allInfo",
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
    path: "/profileOver",
    element: <ProfileOverview />,
  },
  {
    path: "/qualification",
    element: <Qualification />,
  },
  {
    path: "/direction",
    element: <Direction />,
  },
  {
    path: "/allPdf",
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
