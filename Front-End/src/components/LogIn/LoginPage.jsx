import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";
import backgroundImage from "../../assets/Images/image 91 (1).png";
import Logo from "../../assets/Images/CC logo.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear previous messages
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password },
        { withCredentials: true },
      );
      const res_data = response.data;
      storeTokenInLS(res_data.data.accessToken);
      // storeUserDetailsInLS(res_data.data.user); // Store user details in context and local storage
      setMessage(res_data.message);
      navigate("/dashboardPage");
    } catch (error) {
      if (error.response) {
        const contentType = error.response.headers["content-type"];
        if (contentType && contentType.indexOf("application/json") !== -1) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Invalid email or password.");
        }
      } else if (error.request) {
        setMessage("No response from server. Please try again later.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <img
        className="hidden md:block md:w-1/2 h-auto"
        src={backgroundImage}
        alt="Background"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          margin: "5rem 4rem",
        }}
      />
      <div className="bg-white m-6 pt-8 flex flex-col justify-center md:w-1/2 lg:w-1/3 rounded-3xl shadow-lg">
        <div className="flex flex-col items-center">
          <img src={Logo} className="mb-10 w-80" alt="Logo" />
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center">
            Log In
          </h2>
          {message && <p className="text-center text-red-500">{message}</p>}
        </div>
        <form onSubmit={handleSubmit} className="px-6 md:px-12">
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-3 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-lg">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-3 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex flex-row items-center mb-6">
            <input type="checkbox" className="mr-2" />
            <span className="mr-auto">Remember Me</span>
            <a href="/forgot-password" className="text-blue-500">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white text-2xl py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
          <div className="mt-4 mb-4 text-center">
            <p>
              Don't have an account?{" "}
              <span className="text-blue-600">
                <a href="/signup">Sign Up</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
