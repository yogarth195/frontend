import axios from "axios";
import { useState, useEffect } from "react";

const ImageSkeleton = () => {
  return (
    <div className="columns-1 md:columns-4 gap-4 space-y-4 animate-pulse">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-full h-48 bg-gray-300 rounded-lg"></div>
      ))}
    </div>
  );
};

const PreWeddingPage = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchImages = async ()=> {
      try {
        const response = await axios.get("https://backend-axvt.onrender.com/api/prewedding");
        setImageUrls(response.data);
      } catch(err) {
        console.error("Error fetching images: ", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }


    fetchImages();
    
  }, []);

  return (
    <div className="w-full px-5 pb-5 dark:text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Pre-Wedding Photography</h2>

      {loading ? (
        <ImageSkeleton />
      ) : error ? (
        <div className="text-center">
          <div className="text-4xl">404. Not Found</div>
          Failed to load images. Please try again later</div>
      ) : (
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {imageUrls.map((image, index) => (
            <img
              key={index}
              src={`https://backend-axvt.onrender.com${image}`} // Prefix with backend URL
              alt={`Wedding ${index + 1}`}
              className="w-full shadow-md"
            />
          ))}
        </div>
      )}

      <div className="flex justify-center">These were our few Pre Wedding Photoshoots</div>
    </div>
  );
};




export default PreWeddingPage;
