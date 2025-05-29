const VideosPage = () => {
  const videos = [
    { 
      url: "https://www.youtube.com/embed/y6Xx63U2ebs",  
      title: "Indian Wedding Cinematic Showreel",
      desc: "Step into the grandeur and emotions of traditional Indian weddings — a cinematic showcase of culture, color, and love.",
    },
    { 
      url: "https://www.youtube.com/embed/uDHN3DxZecc", 
      title: "Birthday Celebration",
      desc: "A joyful celebration of a young man's special day, filled with laughter, surprises, and heartfelt moments captured beautifully.",
    },
    { 
      url: "https://www.youtube.com/embed/mhJV_HNUx9Y",
      title: "Pinky’s Wedding Teaser",
      desc: "A heartwarming glimpse into Pinky’s magical wedding moments — from rituals to romance, every second crafted with love.",
    },
    { 
      url: "https://www.youtube.com/embed/amgOQI5pGqQ",  
      title: "25th Wedding Anniversary Celebration",
      desc: "A silver jubilee filled with nostalgia, love, and blessings — honoring 25 years of a beautiful journey together.",
    },
    { 
      url: "https://www.youtube.com/embed/K7jgtQCELnk",
      title: "Hemant Weds Sonam",
      desc: "The beautiful union of Hemant and Sonam — captured in timeless frames of celebration, emotions, and togetherness.",
    },
  ];

  return (
    <div className="w-full px-6 py-10 dark:text-white">
      <h2 className="text-3xl font-semibold text-center mb-10">Video Gallery</h2>

      <div className="space-y-16">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row gap-8 items-start"
          >
            <div className="w-full lg:w-2/3 aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="w-full lg:w-1/3">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPage;
