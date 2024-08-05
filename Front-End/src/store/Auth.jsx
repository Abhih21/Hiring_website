import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);

  const fetchUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/details",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (response.data.success) {
        setUserDetails(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }, [token]);

  const fetchCandidates = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/candidate/applicants",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setCandidates(response.data.data); // Set candidates here
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  }, [token]);

  const fetchPostJobs = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/job/getJobPost",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setJobs(response.data.data);
      console.log("jobdata fetched:", response.data.data);
    } catch (error) {
      console.error("Error fetching Jobs", error);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchUserDetails();
    }
  }, [token, fetchUserDetails]);

  useEffect(() => {
    if (token) {
      fetchCandidates();
    }
  }, [token, fetchCandidates]);

  useEffect(() => {
    if (token) {
      fetchPostJobs();
    }
  }, [token, fetchPostJobs]);

  const storeTokenInLS = (ServerAccessToken) => {
    localStorage.setItem("accessToken", ServerAccessToken);
    setToken(ServerAccessToken);
  };

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
        candidates,
        jobs,
        fetchPostJobs,
        fetchCandidates,
        storeTokenInLS,
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
