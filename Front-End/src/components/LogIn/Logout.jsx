import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";

const Logout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { removeTokenLS, userDetails } = useAuth();

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
        <FaUserCircle className="text-gray-600 hover:text-white cursor-pointer w-8 h-8" />
      </button>

      {isVisible && (
        <div className="absolute top-full right-0 mt-2 z-1 bg-black shadow-lg rounded-lg p-4 w-80 h-52">
          <div className="flex flex-col items-center">
            <div className="mt-10 ml-4">
              <p className="text-lg">{userDetails.name}</p>
              <p className="text-base">{userDetails.email}</p>
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
