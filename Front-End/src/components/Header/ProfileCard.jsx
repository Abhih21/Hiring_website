import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfileCard = ({ user, onLogout }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative z-50">
      <button onClick={toggleVisibility} className="p-2 bg-blue-500 text-white rounded-full">
        <FaUserCircle className="text-gray-600 hover:text-white cursor-pointer w-8 h-8" />
      </button>
      {isVisible && (
        <div className="absolute top-full right-0 mt-2 z-1 bg-black shadow-lg rounded-lg p-4 w-60">
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={onLogout}
              className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
