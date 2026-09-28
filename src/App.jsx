import { Route, Routes } from "react-router";

import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./layout/Error404.jsx";
import Layout from "./layout/Layout.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<ActivitiesPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  </Routes>;
}
