import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = ({ close }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // New state to control entry animation
  const [IsPortfolioOpen, setIsPortfolioOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10); // Allow time for initial render before animation
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(close, 300); // Wait for animation to finish before closing
  };


  useEffect(()=> {
    const handleResize = () => {
      if(window.innerWidth < 768) close();
    };

    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <div
        className={`fixed top-0 right-0 w-full h-screen bg-gray-100 dark:bg-black z-20 shadow-lg overflow-y-auto
        transform transition-transform duration-300 ease-in-out ${
          isClosing ? "translate-x-full" : isVisible ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 bg-gray-100 dark:bg-gray-950 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      
        {/* Sidebar Content */}
        <div className="p-4 text-black dark:text-white flex flex-col gap-7">
          {/* <div className="space-y-2"></div> */}
          
          <div><a href="/">Home</a></div>
          <div className="relative">
            <button onClick={() => setIsPortfolioOpen(!IsPortfolioOpen)} className="focus:outline-none w-full text-left flex flex-row">
              Portfolios <ChevronDown/>
            </button>

            <div className={`absolute left-0 mt-1 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md p-2 transition-all duration-300 transform origin-top ${
              IsPortfolioOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            }`}>
              <a href="/wedding" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Wedding</a>
              <a href="/prewedding" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Pre Wedding</a>
              <a href="/headshots" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Headshots</a>
            </div>
          </div>
          <div><a href="/latest">Latest Projects</a></div>
          <div><a href="/about">About Us</a></div>
          <div><a href="/contact">Contact Us</a></div>
        </div>
      </div>
      
  );
};
