// Import necessary dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg fixed left-0 right-0 top-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">News</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/home" className="hover:text-gray-400">
            Home
          </a>
          <a href="/" className="hover:text-gray-400">
            News
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>

          <a
            href="/loginpage"
            className="hover:text-gray-400 font-black underline pl-7"
          >
            <div className="hover:text-gray-400 font-black underline pl-7">
              <Link to="/login">Login</Link>
            </div>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700">
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            Home
          </a>
          <a href="/card" className="block px-4 py-2 hover:bg-gray-600">
            News
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            Services
          </a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-600">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
