import React, { useState, useEffect } from 'react'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [isOpen, SetIsOpen] = useState(false)
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header className={`bg-[var(--bg-primary)] px-4 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 shadow-lg backdrop-blur-md bg-[var(--bg-primary)]/95' 
        : 'py-5'
    }`}>
      <div className='max-w-[var(--breakpoint-desktop)] mx-auto flex items-center justify-between'>
        <div>
          <img src={Logo} alt="Logo" width={191} height={34} />
        </div>

        <nav className='text-white hidden md:flex items-center'>
          {/* Desktop Menu */}
          <ul className='"hidden md:flex space-x-6 items-center'>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><button onClick={() => setShowLoginPopup(true)} className='bg-[#FFE492] px-[40px] py-[14px] rounded-[8px] text-[18px] text-[var(--bg-primary)] hover:bg-yellow-300 transition-colors'>Log In</button></li>
            <li><a href="#" className='bg-[var(--btn-bg)] px-[35px] py-[14px] rounded-[8px] text-[18px] text-white flex items-center gap-2.5'>Try Whitepace free ? <span><FaArrowRightLong /> </span> </a></li>
          </ul>

        </nav>

        {/* Mobile Menu Button  */}
        <button
          className="md:hidden p-2 text-white hover:text-blue-600"
          onClick={() => SetIsOpen(!isOpen)}
        ><RiMenu3Line className='text-[35px]' />
        </button>

        {/* Mobile Menu */}


      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 pb-4 space-y-2">
          <a href="#" className="block text-white hover:text-blue-600 border-b-1 pb-3 border-white">Home</a>
          <a href="#" className="block text-white hover:text-blue-600 border-b-1 pb-3 border-white">About</a>
          <a href="#" className="block text-white hover:text-blue-600 border-b-1 pb-3 border-white">Services</a>
          <a href="#" className="block text-white hover:text-blue-600 border-b-1 pb-3 border-white">Blog</a>
          <div className='inline-flex flex-wrap gap-2'>
            <button onClick={() => setShowLoginPopup(true)} className='inline-block bg-[#FFE492] px-[20px] py-[12px] rounded-[8px] text-[18px] text-[var(--bg-primary)] hover:bg-yellow-300 transition-colors'>Log In</button>
            <a href="#" className='bg-[var(--btn-bg)] px-[20px] py-[12px] rounded-[8px] text-[18px] text-white inline-flex items-center gap-2.5'>Try Whitepace free ? <span><FaArrowRightLong /> </span> </a>
          </div>
        </div>
      )}

      {/* Creative Login Popup Modal */}
      {showLoginPopup && (
        <div 
          className="fixed inset-0 bg-gradient-to-br from-black/60 via-purple-900/20 to-blue-900/40 backdrop-blur-sm flex items-center justify-center z-[60] p-4 animate-fadeIn"
          onClick={() => setShowLoginPopup(false)}
        >
          <div 
            className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg w-full max-h-[95vh] overflow-hidden transform animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-200 to-pink-200 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full translate-y-12 -translate-x-12 opacity-40"></div>
            
            {/* Close Button */}
            <button
              onClick={() => setShowLoginPopup(false)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <IoClose className="text-xl text-gray-600 group-hover:text-gray-800 group-hover:rotate-90 transition-all duration-300" />
            </button>

            {/* Header Section */}
            <div className="relative px-8 pt-12 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-sm">Sign in to continue your journey</p>
            </div>

            {/* Form Section */}
            <div className="relative px-8 pb-8">
              <form className="space-y-6">
                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-gray-400"
                      placeholder="Enter your email address"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="group">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-4 bg-white/70 border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder-gray-400"
                      placeholder="Enter your password"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      id="remember"
                      className="sr-only"
                    />
                    <div className="relative">
                      <div className="w-5 h-5 bg-white border-2 border-gray-300 rounded group-hover:border-blue-400 transition-colors"></div>
                      <div className="absolute inset-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      <svg className="absolute inset-0 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline transition-all">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <span className="flex items-center justify-center">
                    Sign In
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white/80 text-gray-500 font-medium">Or continue with</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:bg-white hover:border-gray-300 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 bg-white/80 border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:bg-white hover:border-gray-300 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Facebook</span>
                  </button>
                </div>
              </form>

              {/* Sign Up Link */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline transition-all">
                    Create Account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
