import React, { useState } from 'react';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

function Login({ handle_login }) {
  const [email, setEmail] = useState("");
  const [pswrd, setPswrd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handle_login) {
      handle_login(email, pswrd);
    }
    setEmail('');
    setPswrd('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 p-4">
      
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl 
        rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-700">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Taskfloww
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Welcome back! Please log in to continue.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="relative mb-4">
            <MailIcon />
            <input
              type="email"
              className="w-full outline-none bg-gray-800/80 border border-gray-600 
              focus:border-emerald-500 text-sm text-gray-100 py-3 pl-10 pr-4 rounded-lg 
              placeholder:text-gray-500 transition-colors"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <LockIcon />
            <input
              type="password"
              className="w-full outline-none bg-gray-800/80 border border-gray-600 
              focus:border-emerald-500 text-sm text-gray-100 py-3 pl-10 pr-4 rounded-lg 
              placeholder:text-gray-500 transition-colors"
              value={pswrd}
              placeholder="Password"
              onChange={(e) => setPswrd(e.target.value)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-500 
            text-white rounded-lg font-semibold py-3 px-6 text-sm 
            transition-all duration-200 transform hover:scale-105 
            shadow-md hover:shadow-emerald-500/30"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
