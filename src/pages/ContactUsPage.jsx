import { useState } from "react";
import { Mail, Phone, User, MessageCircle } from "lucide-react";

export const ContactUsPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ email: "", phone: "" });

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setErrors((prev) => ({ ...prev, email: isValid ? "" : "Invalid email address" }));
  };

  const validatePhone = (value) => {
    const isValid = /^[0-9]{10}$/.test(value);
    setErrors((prev) => ({ ...prev, phone: isValid ? "" : "Enter a valid 10-digit phone number" }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2">
      <h1 className="text-2xl font-semibold mb-4 transition-opacity duration-500 opacity-100">
        Contact Us
      </h1>
      <form className="w-full max-w-md bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]">
        
        {/* Name Field */}
        <div className="mb-3 flex items-center border rounded-md p-2 dark:bg-gray-800">
          <User className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-transparent focus:outline-none dark:text-white"
          />
        </div>

        {/* Email Field */}
        <div className="mb-3 flex flex-col">
          <div className="flex items-center border rounded-md p-2 dark:bg-gray-800">
            <Mail className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none dark:text-white"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="mb-3 flex flex-col">
          <div className="flex items-center border rounded-md p-2 dark:bg-gray-800">
            <Phone className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent focus:outline-none dark:text-white"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                validatePhone(e.target.value);
              }}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-3 flex items-start border rounded-md p-2 dark:bg-gray-800">
          <MessageCircle className="text-gray-500 dark:text-gray-400 mr-2 mt-1" size={18} />
          <textarea 
            rows="4" 
            placeholder="Message" 
            className="w-full bg-transparent focus:outline-none dark:text-white"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300 hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
