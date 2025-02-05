import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Tagline Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 flex items-center">
            <span className="text-green-500 text-2xl mr-2">F</span>OODI
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className=" font-bold mb-2 text-green-500">Useful Links</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>About Us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Main Menu Section */}
        <div>
          <h3 className=" font-bold mb-2 text-green-500">Main Menu</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-green-500 font-bold mb-2">Contact Us</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social Media</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
