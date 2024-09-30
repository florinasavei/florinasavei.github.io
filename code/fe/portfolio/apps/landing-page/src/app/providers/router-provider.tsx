import { Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages';

const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<LandingPage />} />
    </Routes>
  );
};

export { RouterProvider };
