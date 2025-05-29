import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, User, MessageCircle } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Toast from "../components/Toast";

export const ContactUsPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ email: "", phone: "" });
  const formRef = useRef();

  const validateEmail = (value) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setErrors((prev) => ({ ...prev, email: isValid ? "" : "Invalid email address" }));
  };

  const validatePhone = (value) => {
    const isValid = /^[0-9]{10}$/.test(value);
    setErrors((prev) => ({ ...prev, phone: isValid ? "" : "Enter a valid 10-digit phone number" }));
  };

  // Popup toaster to handle successful message sent:
  const [showToast, setShowToast] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dem2izw",    
        "template_9rsbjxk",   
        formRef.current,
        "x25voYllAg1piRc7K"   
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setShowToast(true);
          formRef.current.reset();
          // alert("Message sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send message.");
        }
      );
  };



  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2">
      <h1 className="text-2xl font-semibold mb-4 transition-opacity duration-500 opacity-100">
        Contact Us
      </h1>

      {/* Quick Call Field */}
      <div className="flex items-center space-x-2 mb-2 text-xl">
        <Phone className="text-green-500" size={20} />
        <a href="tel:+918076456925" className="text-green-600 hover:underline font-medium">
          +91 80764-56925
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-4 text-xl">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 dark:text-pink-300 hover:underline">
          <FaInstagram size={20} />
          <span>Instagram</span>
        </a>
        <a href="mailto:your@email.com" className="flex items-center space-x-1 dark:text-red-300 hover:underline">
          <Mail size={20} />
          <span>Email</span>
        </a>
        <a href="https://wa.me/918076456925" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 dark:text-green-300 hover:underline">
          <FaWhatsapp size={20} />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Call Message */}
      <p className="text-center text-lg font-medium mb-4">
        Call now or request a call by leaving us a message
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white dark:bg-black p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02]"
      >
        {/* Name */}
        <div className="mb-3 flex items-center border rounded-md p-2 dark:bg-black">
          <User className="text-gray-500 dark:text-gray-300 mr-2" size={18} />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full bg-transparent focus:outline-none dark:text-white"
          />
        </div>

        {/* Email */}
        <div className="mb-3 flex flex-col">
          <div className="flex items-center border rounded-md p-2 dark:bg-black">
            <Mail className="text-gray-500 dark:text-gray-300 mr-2" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
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

        {/* Phone */}
        <div className="mb-3 flex flex-col">
          <div className="flex items-center border rounded-md p-2 dark:bg-black">
            <Phone className="text-gray-500 dark:text-gray-300 mr-2" size={18} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
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

        {/* Message */}
        <div className="mb-3 flex items-start border rounded-md p-2 dark:bg-black">
          <MessageCircle className="text-gray-500 dark:text-gray-300 mr-2 mt-1" size={18} />
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Message"
            className="w-full bg-transparent focus:outline-none dark:text-white"
          ></textarea>
        </div>

        {/* Time (Optional hidden field) */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300 hover:scale-105"
        >
          Send Message
        </button>
      </form>

      {showToast && (
        <Toast message={"Message Sent Successfully"} onClose={()=> setShowToast(false)}/>
      )}
    </div>
  );
};
