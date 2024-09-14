import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="texure min-h-screen text-[#FDF0D5] font-tiro overflow-x-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
