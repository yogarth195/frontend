const SkeletonPage = () => {
  return (
    <div className="w-full p-10 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-8 w-72 bg-gray-300 rounded mb-6 mx-auto"></div>

      {/* Masonry Skeleton Grid */}
      <div className="columns-1 sm:columns-3 md:columns-4 gap-4 space-y-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="w-full h-48 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonPage;
