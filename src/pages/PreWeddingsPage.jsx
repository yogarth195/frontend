import { useState } from "react";

const ImageSkeleton = () => {
  return (
    <div className="columns-1 md:columns-4 gap-4 space-y-4 animate-pulse">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-full h-48 bg-gray-300"></div>
      ))}
    </div>
  );
};

const ImageWithLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full shadow-md relative">
      {!loaded && (
        <div className="w-full h-48 bg-gray-300 animate-pulse rounded-lg"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

const PreWeddingPage = () => {
  const imageUrls = [
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522492/210620284_115379020794629_4591680789343742151_n_rycklx.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522491/205248818_110127697986428_7556640624950873817_n_sgjl3p.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522491/206212116_112008084465056_6607622332313033170_n_ejgztx.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522467/06_fkznjc.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522464/04_fpls9d.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522485/203655667_107956281536903_3101804356825818563_n_ma0rjw.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522481/15_lnrmrh.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522481/02_gmibtv.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522475/16_ygzylk.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522476/201111498_106506895015175_2692842754143953719_n_k451nj.jpg",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1748522465/_A3A5124_kpfruc.jpg",
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="w-full px-5 pb-5 dark:text-white">
      <h2 className="text-3xl font-semibold text-center mb-6">Pre Wedding Photography</h2>

      {loading ? (
        <ImageSkeleton />
      ) : error ? (
        <div className="text-center">
          <div className="text-4xl">404. Not Found</div>
          Failed to load images. Please try again later
        </div>
      ) : (
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {imageUrls.map((url, index) => (
            <ImageWithLoader key={index} src={url} alt={`Wedding ${index + 1}`} />
          ))}
        </div>
      )}

      {/* Bottom Div */}
      <div className="mt-10 text-center space-y-4">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          Every frame tells a story of love, laughter, and forever.
        </p>

        <a
          href="/contact"
          className="inline-block text-white bg-black dark:bg-white dark:text-black px-6 py-2 rounded-full font-semibold transition hover:scale-105"
        >
          Book Your Pre-Wedding Shoot
        </a>

        <div>
          <a
            href="/wedding"
            className="text-sm text-gray-600 dark:text-gray-400 underline hover:text-black dark:hover:text-white transition"
          >
            Explore Wedding Photography
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreWeddingPage;
