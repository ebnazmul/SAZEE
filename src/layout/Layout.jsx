import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-[#003049] min-h-screen text-[#FDF0D5] font-tiro">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
