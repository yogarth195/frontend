import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { ChevronDown } from "lucide-react";
export function SideBar({ toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [IsPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-white dark:bg-black text-black dark:text-white shadow-md fixed top-0 bottom-10 left-0 z-50 flex items-center justify-between px-6 py-4 h-14">
        
        {/* Logo (Left-Aligned) */}
        <a href="/" className="text-xl">SURAJ STUDIOS</a>

        {/* Nav Links (Right-Aligned & Hidden on Small Screens) */}
        <div className="hidden md:flex flex-row gap-4 ml-auto mr-5">
          <div><a href="/">Home</a></div>
          <div><a href="/latest">Latest Projects</a></div>
          <div><a href="/about">About Us</a></div>
          <div><a href="/contact">Contact Us</a></div>
          <div className="relative">
            <button onClick={() => setIsPortfolioOpen(!IsPortfolioOpen)} className="focus:outline-none flex flex-row">
              Portfolio <ChevronDown/>
            </button>

            <div className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950 shadow-lg rounded-md p-2 z-50 transition-all duration-300 origin-top transform ${
              IsPortfolioOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            }`}>
              <a href="/wedding" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Wedding</a>
              <a href="/prewedding" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Pre Wedding</a>
              <a href="/headshots" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Headshots</a>
            </div>

          </div>

        </div>

        {/* Right Section - Dark Mode & Menu Icon */}
        <div className="flex flex-row gap-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-900 transition duration-300"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          {/* Menu Icon (Hidden on md & above) */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl md:hidden">
            ☰
          </button>
        </div>

        {isOpen && <Navbar close={() => setIsOpen(false)} />}
      </div>
    </>
  );
}
