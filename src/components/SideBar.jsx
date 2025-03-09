import { useState, useEffect } from "react";

export function SideBar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-white dark:bg-black text-black dark:text-white shadow-md fixed top-0 bottom-10 left-0 z-50 flex items-center justify-between px-6 py-4 h-14">
        {/* Logo */}
        <a href="/">
          <img 
            src="https://as1.ftcdn.net/jpg/01/83/48/86/1000_F_183488686_LMe9OENObIsJpSXaxrrS09u3dOvP5vqG.jpg" 
            alt="Logo" 
            className="w-12 h-12 rounded-full"
          />
        </a>

        {/* Menu Icon */}
        <button onClick={() => setMenuOpen((e) => !e)} className="text-3xl md:hidden">
          ☰
        </button>

        {/* Dark Mode Toggle (Desktop Only) */}
        <button 
          onClick={toggleDarkMode} 
          className="hidden md:block p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Full-Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black dark:bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center text-white transition-all duration-300
        ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        {/* Close Button */}
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-4xl">
          ✕
        </button>

        {/* Navigation Links */}
        <nav className="text-2xl space-y-6">
          <a href="/wedding" onClick={() => setMenuOpen(false)}>Wedding</a>
          <a href="/portraits" onClick={() => setMenuOpen(false)}>Portraits</a>
          <a href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="/locations" onClick={() => setMenuOpen(false)}>Locations</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/videos" onClick={() => setMenuOpen(false)}>Videos</a>
          <a href="/reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="/more" onClick={() => setMenuOpen(false)}>More</a>
        </nav>

        {/* Dark Mode Toggle (Inside Menu) */}
        <button 
          onClick={toggleDarkMode} 
          className="mt-10 p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}
