import React, { useState } from 'react';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import '../ScrollingImageReel.css';

const images = [
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
];

export const ScrollingImageReel = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    return (
        <div className="overflow-hidden w-full py-4 bg-white dark:bg-black flex flex-col items-center">
            <div
                className={`scrolling-wrapper flex gap-4 ${isPlaying ? 'scrolling' : 'paused'}`}
            >
                {[...images, ...images].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index}`}
                        className="h-64 w-auto object-cover shadow-md"
                    />
                ))}
            </div>

            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="mt-3 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 transition shadow-md"
                aria-label={isPlaying ? "Pause" : "Play"}
            >
                {isPlaying ? (
                    <PauseIcon className="h-5 w-5 text-white dark:text-black" />
                ) : (
                    <PlayIcon className="h-5 w-5 text-white dark:text-black" />
                )}
            </button>
        </div>
    );
};
