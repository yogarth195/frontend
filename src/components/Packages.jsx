import { useState } from "react";
import { Item } from "./Item";

export const Packages = ({ selectedPackage, setSelectedPackage }) => {
  const [loading, setLoading] = useState(false);

  const packageDetails = {
    "Budget Package": {
      subheading: "Affordable and cost-effective.",
      description: "Perfect for those on a tight budget.",
    },
    "Standard Package": {
      subheading: "Balanced features and price.",
      description: "A great choice for most users.",
    },
    "Premium Package": {
      subheading: "Top-tier with exclusive benefits.",
      description: "For those who want the best experience.",
    },
  };

  const handlePackageChange = (e) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedPackage(e.target.value); // Update selected package in parent
      setLoading(false);
    }, 500);
  };

  return (
    <div className="px-2">
      <div className="mb-4">
        <label className="font-semibold">Package: </label>
        <select
          className="ml-2 p-2 border rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          value={selectedPackage}
          onChange={handlePackageChange}
        >
          {Object.keys(packageDetails).map((pkg) => (
            <option key={pkg} value={pkg}>{pkg}</option>
          ))}
        </select>
      </div>

      <div className="bg-gray-200 dark:bg-gray-950 backdrop-blur-lg text-white my-2 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              <Item 
                mainHeading={selectedPackage} 
                subheading={packageDetails[selectedPackage].subheading} 
                description={packageDetails[selectedPackage].description} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
