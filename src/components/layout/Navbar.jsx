import React, { useState } from 'react';
import { RiArrowDropDownLine, RiMore2Fill } from "react-icons/ri";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
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
      <div className="flex flex-col w-full gap-4 sm:flex-row sm:items-center sm:w-auto">
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          {/* Brand Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-[#FA6C48] text-2xl sm:text-3xl font-bold tracking-tight">
              Alibaba<span className="text-[#333] font-normal text-xl sm:text-2xl">.com</span>
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation"
          >
            <RiMore2Fill className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden bg-white border border-gray-100 rounded-xl p-3 space-y-2`}> 
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-black">Get Started</a>
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              className="w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-black"
            >
              <span>{link.name}</span>
              {link.hasDropdown && <RiArrowDropDownLine className="text-xl text-gray-400" />}
            </button>
          ))}
          <a href="#" className="block px-3 py-2 rounded-md text-gray-900 font-bold hover:bg-gray-50">Sign in</a>
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
      <div className="hidden md:flex w-full sm:w-auto justify-center sm:justify-end">
        <button className="text-sm sm:text-[16px] font-bold text-gray-900 hover:text-[#FA6C48] transition-colors">
          sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;