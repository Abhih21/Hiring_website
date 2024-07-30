import { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import backgroundImage from "../../assets/Images/image 91 (1).png";
import Logo from "../../assets/Images/CC logo.jpg";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        {
          email,
          password,
          username,
          name,
        },
      );
      setMessage(response.data.message);
      setRedirect(true);
    } catch (error) {
      if (error.response) {
        const contentType = error.response.headers["content-type"];
        if (contentType && contentType.indexOf("application/json") !== -1) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Email and username already exists.");
        }
      } else if (error.request) {
        setMessage("No response from server. Please try again later.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (redirect) return <Navigate to="/loginPage" />;

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
        <img
          className="hidden md:block md:w-1/2 h-auto"
          src={backgroundImage}
          alt="Background"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            margin: "4rem 2rem",
          }}
        />
        <div className="bg-white p-8 md:m-6 md:p-14 w-full md:w-1/2 lg:w-1/3 rounded-2xl shadow-lg max-h-[750px] flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <img src={Logo} className="mb-10" alt="Logo" />
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Sign Up
            </h2>
            {message && (
              <p className="text-center text-red-500 mb-4">{message}</p>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-lg">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-3 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-3 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-lg">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Create password"
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
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-3 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white text-2xl py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <FaSpinner className="animate-spin mx-auto" />
              ) : (
                "Sign Up"
              )}
            </button>
            <div className="mt-4 text-center">
              <p>
                Already have an account?{" "}
                <span className="text-blue-600">
                  <Link to="/loginPage">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
