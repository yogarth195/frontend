import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Navbar = ({ close }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [IsPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const dropdownRef = useRef(null); // <-- ref for dropdown

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(close, 300);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) close();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPortfolioOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`fixed top-0 right-0 w-full h-screen bg-gray-100 dark:bg-black z-20 shadow-lg overflow-y-auto
      transform transition-transform duration-300 ease-in-out ${
        isClosing ? "translate-x-full" : isVisible ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 p-2 bg-gray-100 dark:bg-gray-950 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="p-4 text-black dark:text-white flex flex-col gap-7 text-base font-medium tracking-tight">

        <div><a href="/" className="hover:underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">Home</a></div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsPortfolioOpen(!IsPortfolioOpen)}
            className="w-full text-left flex items-center justify-between gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            Portfolios <ChevronDown className={`transform transition-transform duration-300 ${IsPortfolioOpen ? "rotate-180" : ""}`} />
          </button>

          <div
            className={`absolute left-0 mt-2 w-52 bg-white dark:bg-gray-950 shadow-xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 transform origin-top ${
              IsPortfolioOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            }`}
          >
            <a href="/wedding" className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors">Wedding</a>
            <a href="/prewedding" className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors">Pre Wedding</a>
            <a href="/headshots" className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors">Headshots</a>
            <a href="/child-photography" className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors">Child Photography</a>
            <a href="/videos" className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-emerald-800 transition-colors">Video Shoots</a>
            
          </div>
        </div>

        <div><a href="/latest" className="hover:underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">Latest Projects</a></div>
        <div><a href="/about" className="hover:underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">About Us</a></div>
        <div><a href="/contact" className="hover:underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">Contact Us</a></div>

      </div>
    </div>
  );
};
