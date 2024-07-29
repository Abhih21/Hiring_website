import React from "react";
import "./Header.css";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";

import Logout from "../LogIn/Logout";

const Header = () => {
  return (
    <header className="text-white bg-white flex items-center justify-between px-6 py-3 shadow-md absolute w-full  lg:w-[80%]  left-0 lg:ml-72">
      <div className="flex items-center w-full  ">
        <div className="relative  searchbar flex-1 sm:ml-14 md:ml-24 ">
          <input
            type="text"
            placeholder="Search for a Candidate, job or more"
            className="bg-gray-300 w-full lg:w-96 sm:w-[60%]  md:w-[70%]  text-white rounded-full pl-10 pr-3 py-2 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>
      <div className="iconSection flex items-center space-x-4">
        <div className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full">
          <FaCog className="text-gray-600 hover:text-white cursor-pointer" />
        </div>
        <div className="bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full">
          <FaBell className="text-gray-600 hover:text-white cursor-pointer" />
        </div>
        <Logout />
      </div>
    </header>
  );
};

export default Header;
