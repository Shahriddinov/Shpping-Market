import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Spinner } from "./components";
import { privateRoutes, publicRoutes } from "./routes";
import ProtectedRoute from "./utils/ProtectedRoute";

const NotFound = lazy(() => import("./page/404"));

const App = () => {
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
export default App;
