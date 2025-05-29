import { useEffect, useState, useRef } from 'react';
import img1 from '../assets/images/IMG.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
const img4 = 'https://res.cloudinary.com/doeoriu04/image/upload/v1748238150/BNDR9229_lenxom.jpg';

const images = [img1, img2, img3, img4];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const minSwipeDistance = 50; // minimum distance for a swipe to count

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // swiped left, go next
        setCurrent((prev) => (prev + 1) % images.length);
      } else {
        // swiped right, go previous
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
      }
    }

    // reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="w-full h-[60vh] md:h-[110vh] relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};
