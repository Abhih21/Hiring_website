import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import { FaUserCircle } from "react-icons/fa";

const Logout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { removeTokenLS, userDetails } = useAuth();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleLogout = async () => {
    try {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        await axios.post(
          "http://localhost:4000/api/v1/user/logout",
          {},
          { withCredentials: true },
        );
        removeTokenLS();
        navigate("/loginPage");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleVisibility}
        className="p-2 bg-blue-500 text-white rounded-full"
      >
        {userDetails && userDetails.image ? (
          <img
            src={userDetails.image}
            alt="User Avatar"
            className="w-8 h-6 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="text-gray-600 hover:text-white cursor-pointer w-8 h-8" />
        )}
      </button>

      {isVisible && (
        <div className="absolute top-full right-0 mt-2 z-50 bg-indigo-900 shadow-lg rounded-lg p-4 w-80 h-52">
          <div className="flex flex-col items-center">
            {userDetails && userDetails.image && (
              <img
                src={userDetails.image}
                alt="User Avatar"
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
            )}
            <div className="ml-4 text-center">
              <p className="text-lg font-semibold">
                {userDetails ? userDetails.name : "Guest"}
              </p>
              <p className="text-base text-gray-300">
                {userDetails ? userDetails.email : "No email available"}
              </p>
            </div>
            <button
              onClick={handleLogout}
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

export default Logout;
