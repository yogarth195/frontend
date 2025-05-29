import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const Toast = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4500); // Start fade-out at 4.5s

    const closeTimer = setTimeout(() => {
      onClose();
    }, 5000); // Remove at 5s

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={`relative flex items-center bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg shadow-lg transition-opacity duration-500 overflow-hidden toast-box ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >

        <div className="relative mr-3">
          <CheckCircle className="text-green-600 z-10" size={24} />
          
        </div>

        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-sm text-green-800 underline hover:text-green-900"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Toast;
