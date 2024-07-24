import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import backgroundImage from '../../assets/Images/image 91 (1).png';
import Logo from '../../assets/Images/CC logo.jpg';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/user/register',
        {
          email,
          password,
          username,
          name,
        }
      );
      setMessage(response.data.message);
      setRedirect(true);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else if (error.request) {
        setMessage('No response from server. Please try again later.');
      } else {
        setMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  if (redirect) return <Navigate to="/loginpage" />;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <img
          className="hidden md:block relative w-full bg-cover bg-center"
          src={backgroundImage}
          alt=""
        />
        <div className="bg-white p-14 left-2/4 absolute w-5/12 rounded-2xl shadow-lg">
          <div className="pl-7 pr-7 flex flex-col">
            <img src={Logo} className="mb-16" alt="" />
            <h2 className="text-5xl font-bold mb-12 text-center">SignUp</h2>
            {message && <p className="text-center text-red-500">{message}</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-4">
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
                  onChange={e => setUsername(e.target.value)}
                  className="mt-1 block w-full px-3 py-5 border-b-2 border-gray-300 rounded-md shadow-none focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
                />
              </div>
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
                  onChange={e => setEmail(e.target.value)}
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
                  placeholder="Create password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-5 border-b-2 border-gray-300 rounded-md shadow-none focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
                />
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
                  onChange={e => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-5 border-b-2 border-gray-300 rounded-md shadow-none focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-11/12 ml-6 bg-blue-900 text-white text-2xl py-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
