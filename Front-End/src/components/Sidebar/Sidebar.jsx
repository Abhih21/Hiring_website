// src/components/Sidebar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaChartLine, FaClipboardList, FaUserFriends, FaCalendarAlt } from 'react-icons/fa';
import Logo from '../../assets/coloredcow-logo.png'

const Sidebar = () => {
  const [activePage, setActivePage] = useState('/');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSetActivePage = (page) => {
    setActivePage(page);
    setIsDropdownOpen(false); // Close the dropdown when another page is selected
  };

  const links = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaHome /> },
    { name: 'Application Tracking', path: '/ApplicationTracking', icon: <FaClipboardList /> },
    { name: 'Time to Hire', path: '/TimeToHire', icon: <FaCalendarAlt /> },
    { name: 'Performance Analysis', path: '/PerformanceAnalysis', icon: <FaChartLine /> },
  ];

  const interviewManagementLinks = [
    { name: 'Schedule Interview', path: '/InterviewManagement/Schedule', icon: <FaUserFriends /> },
    { name: 'Interview Feedback', path: '/InterviewManagement/Feedback', icon: <FaUserFriends /> },
  ];

  return (
    <div className="h-screen w-72 bg-custom-sidebar text-custom-text flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-gray-700 mt-4 ">
        <img src={Logo} alt="" className='mb-3' />
      </div>
      <nav className="flex-1 pt-6">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={`py-3 px-6 text-lg flex mt-1 items-center ${
              activePage === link.path ? 'text-blue-700 border-l-4 border-blue-500' : 'hover:bg-sky-300'
            }`}
            onClick={() => handleSetActivePage(link.path)}
          >
            {link.icon}
            <span className="ml-4">{link.name}</span>
          </NavLink>
        ))}
        <button
          className="block py-3 px-6 text-lg w-full text-left flex items-center hover:bg-sky-300"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="">{isDropdownOpen ? '▼' : '▶'} Interview Management</span>
        </button>
        {isDropdownOpen && (
          <div className="pl-6">
            {interviewManagementLinks.map((sublink) => (
              <NavLink
                key={sublink.path}
                to={sublink.path}
                className={`block py-2 px-6 text-lg flex items-center ${
                  activePage === sublink.path ? ' text-blue-700 border-l-4 border-blue-500' : 'hover:bg-sky-300'
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
  );
};

export default Sidebar;
