import React from "react";
import { Camera, Users, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-200 flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About Suraj Studios</h1>

      <p className="max-w-3xl text-center text-lg leading-relaxed">
        At Suraj Studios, we believe photography is more than just capturing
        moments—it's about telling stories that last a lifetime. Our passion
        for visual storytelling drives us to create timeless images filled with
        emotion and authenticity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 border dark:border-gray-700 rounded-lg text-center shadow-md">
          <Camera size={50} className="mx-auto mb-4 text-gray-700 dark:text-gray-400" />
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="text-sm">
            To create stunning, authentic, and emotionally rich imagery that
            tells a story beyond words.
          </p>
        </div>

        <div className="p-6 border dark:border-gray-700 rounded-lg text-center shadow-md">
          <Users size={50} className="mx-auto mb-4 text-gray-700 dark:text-gray-400" />
          <h3 className="text-xl font-semibold">Our Team</h3>
          <p className="text-sm">
            A passionate group of creatives dedicated to delivering artistic and
            high-quality photography experiences.
          </p>
        </div>

        <div className="p-6 border dark:border-gray-700 rounded-lg text-center shadow-md">
          <Heart size={50} className="mx-auto mb-4 text-gray-700 dark:text-gray-400" />
          <h3 className="text-xl font-semibold">Our Commitment</h3>
          <p className="text-sm">
            We focus on capturing genuine emotions and unforgettable moments
            with precision and artistry.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg text-center">
          Whether it's a wedding, a portrait session, or a special event, Suraj
          Studios is here to bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
