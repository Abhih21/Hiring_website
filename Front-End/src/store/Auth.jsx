import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  //   useEffect(() => {
  //     const storedUserDetails = localStorage.getItem("userDetails");
  //     if (storedUserDetails) {
  //       setUserDetails(JSON.parse(storedUserDetails));
  //     }
  //   }, []);

  useEffect(() => {
    if (token) {
      // Fetch user details if token is present
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/v1/user/details",
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          if (response.data.success) {
            setUserDetails(response.data.data);
            console.log("apiuserdata:", response.data.data);
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
    }
  }, [token]);

  const storeTokenInLS = (ServerAccessToken) => {
    localStorage.setItem("accessToken", ServerAccessToken);
    setToken(ServerAccessToken);
  };

  //   const storeUserDetailsInLS = (user) => {
  //     localStorage.setItem("userDetails", JSON.stringify(user));
  //     setUserDetails(user);
  //   };

  const removeTokenLS = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userDetails");
    setToken(null);
    setUserDetails(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userDetails,
        storeTokenInLS,
        // storeUserDetailsInLS,
        removeTokenLS,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
