// src/components/LoginPage.jsx
import  { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../assets/Images/image 91 (1).png'
import Logo from '../../assets/Images/CC logo.jpg'
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
    <>
    <div className="min-h-screen  flex  bg-gray-100 ">
      <img className='hidden md:block relative w-screen ' src={backgroundImage}  alt="" />
      <div className="bg-white mt-24  pt-8 left-2/4 absolute w-5/12  rounded-3xl shadow-lg ">
      <div className='  flex flex-col'>
      <img src={Logo} className='mb-10  ml-24 w-2/3' alt="" />
        <h2 className="text-5xl font-bold mb-14 text-center">Log In</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className='pl-12 pr-12' >
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
          <div className="mb-4 ">
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
          <div className='flex flex-row  mb-16 mt-18 pl-8 '>
            <input type="radio" className='ml-8' />
            <span className='ml-2'>Remember Me</span>
            <div className='ml-56 text-blue-500 '>Forget Password?</div>
          </div>
          <button
            type="submit"
            className="w-10/12 ml-14 bg-blue-950 text-white text-2xl py-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <div className='mt-4 ml-14 mb-12'>
            <p>Don't have a account? <span className='text-blue-600'> <Link to={'/signup'}>SignUp</Link></span>  </p>
          </div>
        </form>
      </div>
     
    </div>
    </>
  );
};

export default LoginPage;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaGoogle } from 'react-icons/fa';

// const SignInForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:4000/api/v1/user/login', {
//         email,
//         password,
//         rememberMe,
//       });
//       console.log('Sign in successful:', response.data);
//       // Handle successful sign-in (e.g., redirect, store token, etc.)
//     } catch (err) {
//       console.error('Sign in error:', err);
//       setError('Failed to sign in. Please check your credentials and try again.');
//     }
//   };

//   return (
//     <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
//       <div className="p-4 sm:p-7">
//         <div className="text-center">
//           <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
//           <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
//             Don't have an account yet?
//             <a className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="/signup">
//               Sign up here
//             </a>
//           </p>
//         </div>

//         <div className="mt-5">
//           <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
//             <FaGoogle className="w-4 h-auto" />
//             Sign in with Google
//           </button>

//           <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:mr-6 after:flex-1 after:border-t after:border-gray-200 after:ml-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">Or</div>

//           <form onSubmit={handleSubmit}>
//             <div className="grid gap-y-4">
//               <div>
//                 <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     aria-describedby="email-error"
//                   />
//                   <div className="hidden absolute inset-y-0 end-0 pointer-events-none pr-3">
//                     <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
//                       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
//               </div>

//               <div>
//                 <div className="flex justify-between items-center">
//                   <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
//                   <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="/recover-account">Forgot password?</a>
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     aria-describedby="password-error"
//                   />
//                   <div className="hidden absolute inset-y-0 end-0 pointer-events-none pr-3">
//                     <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
//                       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
//               </div>

//               <div className="flex items-center">
//                 <div className="flex">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                   />
//                 </div>
//                 <div className="ml-3">
//                   <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
//                 </div>
//               </div>

//               {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

//               <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
//                 Sign in
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;
