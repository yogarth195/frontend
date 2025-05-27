export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 text-center space-y-6">
      <div>
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-2xl mt-2">Page Not Found</p>
        <p className="text-sm mt-1 max-w-md mx-auto">
          The page you're looking for doesn’t exist or may have been moved.
        </p>
      </div>

      <div className="mt-6">
        <p className="text-lg mb-3">Try visiting one of these pages instead:</p>
        <ul className="space-y-2 text-base">
          <li><a href="/wedding" className="underline hover:opacity-80">Wedding Photography</a></li>
          <li><a href="/prewedding" className="underline hover:opacity-80">Pre Wedding Photoshoots</a></li>
          <li><a href="/about" className="underline hover:opacity-80">About Us</a></li>
          <li><a href="/contact" className="underline hover:opacity-80">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};
