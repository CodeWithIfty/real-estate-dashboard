import { useState } from "react";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import WelcomeBanner from "./partials/dashboard/WelcomeBanner";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
            <Outlet></Outlet>

        </main>
      </div>
    </div>
  );
};

export default Root;
