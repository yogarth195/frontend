import { useEffect, useState } from 'react';
import img1 from '../assets/images/IMG.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
const img4 =  'https://res.cloudinary.com/doeoriu04/image/upload/v1748238150/BNDR9229_lenxom.jpg'


const images = [img1, img2, img3, img4];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 6000); // 6 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[110vh] relative overflow-hidden">

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
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* ADD SOMETHING HERE IF YOU WANT TO PUT IT IN THE CAROUSEL */}
    </div>
  );
};
