import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const navLinks = [
    { name: 'Why Alibaba.com', hasDropdown: true, isActive: true },
    { name: 'Trade Services', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Webinars', hasDropdown: true },
    { name: 'Partners', hasDropdown: false },
  ];

  return (
    <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-12 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Left: Logo and Nav Links */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full sm:w-auto">
        {/* Brand Logo */}
        <div className="flex items-center cursor-pointer">
          <span className="text-[#FA6C48] text-2xl sm:text-3xl font-bold tracking-tight">
            Alibaba<span className="text-[#333] font-normal text-xl sm:text-2xl">.com</span>
          </span>
        </div>

        {/* Mobile Links Row */}
        <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-600 font-medium md:hidden">
          <a href="#" className="hover:text-black transition-colors px-2 py-1 rounded-md">Get Started</a>
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-1 cursor-pointer py-1 px-2 rounded-md hover:text-black transition-colors">
              <span>{link.name}</span>
              {link.hasDropdown && (
                <RiArrowDropDownLine className="text-lg text-gray-400" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop Links Section */}
        <div className="hidden md:flex flex-wrap items-center gap-8 text-[15px] text-gray-600 font-medium">
          <a href="#" className="hover:text-black transition-colors">Get Started</a>
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className={`group flex items-center cursor-pointer relative py-1 hover:text-black transition-colors ${
                link.isActive ? 'border-b-2 border-black text-black' : ''
              }`}
            >
              <span>{link.name}</span>
              {link.hasDropdown && (
                <RiArrowDropDownLine className="text-2xl text-gray-400 group-hover:text-black" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Sign In */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end">
        <button className="text-sm sm:text-[16px] font-bold text-gray-900 hover:text-[#FA6C48] transition-colors">
          sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;