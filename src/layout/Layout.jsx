import Navbar from "./Navbar";
import { Outlet } from "react-router";

/** The shared layout for all pages of the app */
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
