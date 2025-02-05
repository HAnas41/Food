import React from "react";
import { FaSearch } from "react-icons/fa"; // Search Icon
import { HiPhone } from "react-icons/hi"; // Phone Icon for Contact

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo - Adjusted to be a little left */}
      <div className="text-green-500 text-2xl font-bold ml-20">
        FOODI
      </div>

      {/* Navigation Links - Centered */}
      <ul className="flex space-x-12 mx-auto">
        <li>
          <a className="text-green-500">
            Home
          </a>
        </li>
        <li>
          <a className="text-gray-700 hover:text-green-500 cursor-pointer">
            Menu
          </a>
        </li>
        <li>
          <a className="text-gray-700 hover:text-green-500 cursor-pointer">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right Section - Search Icon, Contact Icon with Text */}
      <div className="flex items-center space-x-7 mr-20">
        {/* Search Icon */}
        <FaSearch className="text-gray-700 cursor-pointer hover:text-green-500" />

        {/* Contact Icon with "Contact" Text */}
        <div className="flex items-center bg-green-500 text-white py-1 px-3 rounded-md ml-12">
          <HiPhone className="mr-2" />
          <span>Contact</span>
        </div>
      </div>
    </nav>
  );
}
