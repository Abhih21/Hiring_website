import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaClipboardList,
  FaUserFriends,
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../../assets/Images/coloredcow-logo.png";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Dashboard", path: "/dashboardPage", icon: <FaHome /> },
    {
      name: "Application Tracking",
      path: "/ApplicationTracking",
      icon: <FaClipboardList />,
    },
    { name: "Time to Hire", path: "/TimeToHire", icon: <FaCalendarAlt /> },
    {
      name: "Performance Analysis",
      path: "/PerformanceAnalysis",
      icon: <FaChartLine />,
    },
    { name: "Job", path: "/jobpage", icon: <FaCalendarAlt /> },
  ];

  const interviewManagementLinks = [
    {
      name: "Calendar",
      path: "/InterviewManagement/Calendar",
      icon: <FaUserFriends />,
    },
    {
      name: "Schedule Interview",
      path: "/InterviewManagement/ScheduleInterview",
      icon: <FaUserFriends />,
    },
  ];

  const handleSetActivePage = (page) => {
    setIsDropdownOpen(false);
    setIsSidebarOpen(false); // Close the sidebar when a page is selected on small screens
  };

  useEffect(() => {
    const dropdownPaths = interviewManagementLinks.map((link) => link.path);
    if (dropdownPaths.includes(currentPath)) {
      setIsDropdownOpen(true);
    }
  }, [currentPath]);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed h-full w-72 bg-[#4c1ba1] text-white flex flex-col transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-10`}
      >
        <div className="flex items-center justify-center h-20 border-b border-blue-900 bg-blue-900">
          <img src={Logo} alt="Logo" className="h-10 mb-2" />
        </div>
        <nav className="flex-1 pt-6 overflow-y-auto">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={`py-3 px-6 text-lg flex items-center mt-1 transition-colors duration-300 ${
                currentPath === link.path
                  ? "bg-blue-700 border-l-4 border-blue-500"
                  : "hover:bg-blue-600"
              }`}
              onClick={() => handleSetActivePage(link.path)}
            >
              {link.icon}
              <span className="ml-4">{link.name}</span>
            </NavLink>
          ))}
          <button
            className="py-3 px-6 text-lg w-full text-left flex items-center mt-1 hover:bg-blue-600"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>{isDropdownOpen ? "▼" : "▶"} Interview Management</span>
          </button>
          {isDropdownOpen && (
            <div className="pl-6">
              {interviewManagementLinks.map((sublink) => (
                <NavLink
                  key={sublink.path}
                  to={sublink.path}
                  className={`py-2 px-6 text-lg flex items-center mt-1 transition-colors duration-300 ${
                    currentPath === sublink.path
                      ? "bg-blue-700 border-l-4 border-blue-500"
                      : "hover:bg-blue-600"
                  }`}
                  onClick={() => handleSetActivePage(sublink.path)}
                >
                  {sublink.icon}
                  <span className="ml-4">{sublink.name}</span>
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </div>

      {/* Hamburger Button */}
      <div className="lg:hidden fixed top-4 left-4 flex items-center justify-between w-full p-2 z-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-gray-800"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
