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

const WeddingPage = () => {
  const imageUrls = [
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748238150/BNDR9229_lenxom.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239062/1_obsmlr.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239062/c3_wsa8re.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239059/img3_gjcew2.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239059/img2_jttqsy.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239058/g..Back_33_zxgwwg.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239059/IMG_ferrpd.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239057/BNDR8241_g4kfld.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239058/BNDR7940_sa8jo1.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239056/BNDR2668_fruxoy.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239056/4X2A7189_m9varo.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239054/_A3A9756_copy_rai8u0.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239056/4X2A6538_uath8a.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239058/BNDR9917_wnze0k.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239057/BNDR9229_gyceqk.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239057/BNDR0238_ycffna.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239054/4X2A6547_j3pmcb.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748239052/_A3A0187_copy_2_dqwqqd.jpg"
  ]
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchImages = async ()=> {
  //     try {
  //       const response = await axios.get("https://backend-axvt.onrender.com/api/wedding");
  //       setImageUrls(response.data);
  //     } catch(err) {
  //       console.error("Error fetching images: ", err);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchImages();
  // }, []);

  // The above is a callback function to make when you want to load something;


  return (
    <div className="w-full px-5 pb-5 dark:text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Wedding Photography</h2>

      {loading ? (
        <ImageSkeleton />
      ) : error ? (
        <div className="text-center">
          <div className="text-4xl">404. Not Found</div>
          Failed to load images. Please try again later</div>
      ) : (
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url} // Prefix with backend URL
              alt={`Wedding ${index + 1}`}
              className="w-full shadow-md"
            />
          ))}
        </div>
      )}

      <div className="flex justify-center">This was Our Wedding Photography</div>
    </div>
  );
};




export default WeddingPage;
