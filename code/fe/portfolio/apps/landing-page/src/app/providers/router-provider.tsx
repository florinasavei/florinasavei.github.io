import { Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages';

const routes = [
  { path: "/", element: <Navigate to="/home" replace /> },
  { path: "/home", element: <LandingPage /> },
  { path: "/profile", element: <LandingPage /> }
];

const RouterProvider = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export { RouterProvider };
