import React from "react";
import { Camera, Users, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-200 flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About Suraj Studios</h1>

      <p className="max-w-3xl text-center text-lg leading-relaxed">
        Founded in 1995 and based in New Delhi, we specialize in wedding and commercial photography with a strong focus on B2B clients. With decades of experience, our passion lies in capturing timeless moments and delivering high-quality visual storytelling for brands and businesses alike.
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
          We believe photography is more than just capturing
          moments—it's about telling stories that last a lifetime. Our passion
          for visual storytelling drives us to create timeless images filled with
          emotion and authenticity.
        </p>
      </div>

      <div className="mt-16 w-full flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Visit Our Studio</h2>
        <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Suraj Studios, Connaught Place, New Delhi, India
        </p>
        <div className="w-full max-w-3xl h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Suraj Studios Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112113.79841308847!2d77.1024901514396!3d28.632813097085197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd41d5fd35f1%3A0x8d55e3ff1de170cf!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1716742664923!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
