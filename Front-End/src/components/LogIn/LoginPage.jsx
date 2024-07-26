import { useState } from "react";
import axios from "axios";
import backgroundImage from "../../assets/Images/image 91 (1).png";
import Logo from "../../assets/Images/CC logo.jpg";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password },
        { withCredentials: true }, // Ensure cookies are included in requests
      );
      console.log(response.data);
      setMessage(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else if (error.request) {
        setMessage("No response from server. Please try again later.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    }
    // try {
    //   const response = await axios.post(
    //     "http://localhost:4000/api/v1/user/login",
    //     { email, password }
    //   );
    //   const { data } = response.data;
    //   const { user, accessToken } = data;

    //   console.log("frontend user:", user, accessToken)
    //   if (accessToken && user) {
    //     localStorage.setItem("accessToken", accessToken);
    //     navigate('/dashboard');
    //   } else {
    //     setMessage("Token or user data not found in response");
    //   }
    // } catch (error) {
    //   if (error.response && error.response.data) {
    //     setMessage(error.response.data.message || "Login failed");
    //   } else {
    //     setMessage("Login failed");
    //   }
    //   console.error("Error:", error);
    // }
  };

  return (
    <>
      <div className="min-h-screen flex bg-gray-100 ">
        <img
          className="hidden md:block relative w-screen "
          src={backgroundImage}
          alt=""
        />
        <div className="bg-white mt-24 pt-8 left-2/4 absolute w-5/12 rounded-3xl shadow-lg ">
          <div className="flex flex-col">
            <img src={Logo} className="mb-10 ml-24 w-2/3" alt="" />
            <h2 className="text-5xl font-bold mb-14 text-center">Log In</h2>
            {message && <p className="text-center text-red-500">{message}</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="pl-12 pr-12">
              <div className="mb-10">
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
                  className="mt-1 block w-full px-3 py-5 border-b-2 border-gray-300 rounded-md shadow-none focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-5 border-b-2 border-gray-300 rounded-md shadow-none focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
                />
              </div>
            </div>
            <div className="flex flex-row mb-16 mt-18 pl-8">
              <input type="radio" className="ml-8" />
              <span className="ml-2">Remember Me</span>
              <div className="ml-56 text-blue-500">Forget Password?</div>
            </div>
            <button
              type="submit"
              className="w-10/12 ml-14 bg-blue-950 text-white text-2xl py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <div className="mt-4 ml-14 mb-12">
              <p>
                Don't have an account?{" "}
                <span className="text-blue-600">
                  <Link to={"/signup"}>SignUp</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
