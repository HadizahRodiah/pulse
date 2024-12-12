import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-200">
      <nav className="w-full bg-green-200 fixed top-0 left-0 z-50 overflow-x-hidden">
      <div className="flex items-center justify-between px-4 md:px-10 pt-10 md:pt-0">
        {/* Logo */}
        <h1 className="text-4xl text-green-800 font-bold m-4">PULSE</h1>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-green-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 md:items-center`}
        >
          <p className="text-green-800 font-bold mx-2">Features</p>
          <p className="text-green-800 font-bold mx-2">Customers Stories</p>
          <p className="text-black font-bold mx-2">Pricing</p>
          <p className="text-green-800 font-bold mx-2">Blog</p>
          <button className="bg-transparent border-2 border-green-500 text-green-800 font-bold px-4 py-2">
            Sign up
          </button>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Nav;
