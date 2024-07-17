// src/components/Header.jsx
import './Header.css'
import { FaSearch, FaBell, FaCog, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="navbar text-white bg-white flex  absolute left-72  items-center justify-between px-6 py-3 shadow-md">
      <div className="flex items-center">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search for a Candidate, job or more"
            className="bg-gray-300 w-96 text-white rounded-full pl-10 pr-3 py-2 focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
       <div className='bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full'>
       <FaCog className="text-gray-600 hover:text-white cursor-pointer" />
       </div>
       <div className='bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full'>
       <FaBell className="text-gray-600 hover:text-white cursor-pointer" />
       </div>
       <FaUserCircle className="text-gray-600 hover:text-white cursor-pointer w-8 h-8" />
     
    
      </div>
    </header>
  );
};

export default Header;
