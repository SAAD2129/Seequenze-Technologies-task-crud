import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-[100vh]">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4  left-[241px] bg-black">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
