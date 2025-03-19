import { useState, useEffect } from "react";

export function BookingPage({ CategorySelected }) {
  const [selectedCategory, setSelectedCategory] = useState(CategorySelected || "Budget Package");

  useEffect(() => {
    setSelectedCategory(CategorySelected); // Update when prop changes
  }, [CategorySelected]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-black shadow-lg rounded-lg md:border">
      <div className="text-2xl text-center font-bold mb-4">Bookings Page</div>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
        Fill in the details below to confirm your booking.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Full Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-slate-950 text-black dark:text-white"
            required 
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-slate-950 text-black dark:text-white"
            required 
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Date</label>
            <input 
              type="date" 
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-slate-950 text-black dark:text-white"
              required 
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 dark:text-gray-300 font-medium">Time</label>
            <input 
              type="time" 
              className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-slate-950 text-black dark:text-white"
              required 
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium">Category</label>
          <select 
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-slate-950 text-black dark:text-white"
            value={selectedCategory} 
            onChange={handleCategoryChange} 
            required
          >
            <option value="Budget Package">Budget</option>
            <option value="Standard Package">Standard</option>
            <option value="Premium Package">Premium</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
