import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaChartLine, FaClipboardList, FaUserFriends, FaCalendarAlt, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/Images/coloredcow-logo.png';

function Sidebar() {
    const [activePage, setActivePage] = useState('/');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // for checking if user is logged
    // const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    // for displaying the options according to role
    // const role = useSelector((state) => state?.auth?.role);

    const handleSetActivePage = (page) => {
        setActivePage(page);
        setIsDropdownOpen(false);
        setIsSidebarOpen(false); // Close the sidebar when a page is selected on small screens
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
        <>
            {/* {isLoggedIn &&()} */}
            <div className="flex fixed h-screen">
                {/* Sidebar */}
                <div className={`h-screen w-72 bg-custom-sidebar text-custom-text flex flex-col transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative absolute z-10`}>
                    <div className="flex items-center justify-center h-20 border-b border-gray-700 mt-4">
                        <img src={Logo} alt="Logo" className="mb-3" />
                    </div>
                    <nav className="flex-1 pt-6">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={`py-3 px-6 text-lg flex mt-1 items-center ${activePage === link.path ? 'text-blue-700 border-l-4 border-blue-500' : 'hover:bg-sky-300'}`}
                                onClick={() => handleSetActivePage(link.path)}
                            >
                                {link.icon}
                                <span className="ml-4">{link.name}</span>
                            </NavLink>
                        ))}
                        <button
                            className="py-3 px-6 text-lg w-full text-left flex items-center hover:bg-sky-300"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <span>{isDropdownOpen ? '▼' : '▶'} Interview Management</span>
                        </button>
                        {isDropdownOpen && (
                            <div className="pl-6">
                                {interviewManagementLinks.map((sublink) => (
                                    <NavLink
                                        key={sublink.path}
                                        to={sublink.path}
                                        className={`py-2 px-6 text-lg flex items-center ${activePage === sublink.path ? 'text-blue-700 border-l-4 border-blue-500' : 'hover:bg-sky-300'}`}
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
                <div className="lg:hidden fixed top-4 left-8 flex items-center justify-between w-full text-custom-text p-4 z-20">
                    {/* <img src={Logo} alt="Logo" className="h-10" /> */}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
