// src/components/LoginPage.jsx
import  { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../assets/image 91 (1).png'
import Logo from '../../assets/CC logo.jpg'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/user/login', { email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <img className='hidden md:block relative w-full bg-cover bg-center' src={backgroundImage}  alt="" />
      <div className="bg-white p-14 left-2/4 absolute w-5/12  rounded-2xl shadow-lg ">
      <div className='pl-7 pr-7  flex flex-col'>
      <img src={Logo} className='mb-16' alt="" />
        <h2 className="text-5xl font-bold mb-12 text-center">Log In</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='p-4'>
          <div className="mb-10 ">
            <label htmlFor="email" className="block text-lg  rounded-md rounded-b-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email id'
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
              placeholder='Enter your password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-5 border-b-2 border-gray-300 rounded-md shadow-none focus:outline-none focus:border-indigo-500 focus:ring-0 sm:text-lg"
            />
          </div>
          </div>
          <div className='flex flex-row  mb-16 mt-18'>
            <input type="radio" className='ml-8' />
            <span className='ml-2'>Remember Me</span>
            <div className='ml-56 text-blue-500 '>Forget Password?</div>
          </div>
          <button
            type="submit"
            className="w-11/12 ml-6 bg-blue-900 text-white text-2xl py-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <div className='mt-8 ml-7'>
            <p>Don't have a account? <span className='text-blue-600'> <Link to={'/signup'}>SignUp</Link></span>  </p>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default LoginPage;
