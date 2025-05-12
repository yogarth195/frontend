import { lazy, Suspense, useEffect, useState } from 'react'
import './index.css' 
import { SideBar } from './components/SideBar'
import { ImageContainer } from './components/ImageContainer';
import img1 from './assets/D.D.D.jpg'
import { BottomCard } from './components/BottomCard';
import { Route, Routes } from 'react-router-dom';
import SkeletonPage from './pages/SkeletonPage.';
import { PortraitsPage } from './pages/PortraitsPage';
import { Packages } from './components/Packages';
import { BookingPage } from './pages/BookingPage';
import { ContactUsPage } from './pages/ContactUsPage';
import PreWeddingPage from './pages/PreWeddingsPage';
import { Calendar, Camera, Phone } from 'lucide-react';
import AboutUs from './pages/AboutUsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HeroCarousel } from './components/HeroCarousel';

const WeddingPage = lazy(()=> import("./pages/WeddingPage"))

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [selectedCategory, setSelectedCategory] = useState("Budget Package");

  return (
      <div className={`flex flex-col font-dmSerif transition-colors duration-300 bg-white dark:bg-black dark:text-white min-h-screen`}>
        <SideBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <HeroCarousel/>

        <div className="pt-16">
          <Suspense fallback={<SkeletonPage />}>
            <Routes>
              <Route path="/" element={
                <>
                  <div className="flex justify-center text-2xl dark:text-white p-2">
                    Hello, Welcome to our website
                  </div>

                  <div className="max-w-4xl mx-auto text-center text-gray-700 dark:text-gray-300 px-4">
                    <p className="text-lg leading-relaxed">
                      Capturing timeless moments, transforming them into cherished memories.
                      Our team believes in storytelling through photography, bringing out the 
                      essence of every frame.
                    </p>
                  </div>

                  <div className="flex flex-col gap-5 px-3 my-5">
                    <div className="flex flex-row flex-wrap items-start gap-20 p-2 justify-center">
                      <ImageContainer imageUrl={img1} />
                      <ImageContainer imageUrl={img1} />
                    </div>

                    <div className="text-center text-gray-800 dark:text-gray-200 text-lg mt-5">
                      Every picture tells a story, but only a few capture the soul.
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-800 dark:text-gray-200 mt-6">
                      <div className="p-4 border dark:border-gray-700 rounded-lg shadow-md">
                        <Camera size={40} className="mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                        <h3 className="text-xl font-semibold">Artistic Vision</h3>
                        <p className="text-sm">
                          Every shot is meticulously crafted to bring out the finest details.
                        </p>
                      </div>

                      <div className="p-4 border dark:border-gray-700 rounded-lg shadow-md">
                        <Calendar size={40} className="mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                        <h3 className="text-xl font-semibold">Seamless Planning</h3>
                        <p className="text-sm">
                          Book effortlessly and let us handle the magic behind the lens.
                        </p>
                      </div>

                      <div className="p-4 border dark:border-gray-700 rounded-lg shadow-md">
                        <Phone size={40} className="mx-auto mb-2 text-gray-600 dark:text-gray-400" />
                        <h3 className="text-xl font-semibold">Personalized Service</h3>
                        <p className="text-sm">
                          We believe every session is unique and tailor it to your vision.
                        </p>
                      </div>
                    </div>

                    <div className='text-black dark:text-white mt-6 text-lg text-center font-semibold'>
                      Crafting timeless memories, one frame at a time.
                    </div>

                    <div className="flex justify-center mt-5">
                      <a href="/wedding" className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                        Explore Weddings
                      </a>
                    </div>
                  </div>
                </>
              } />
              <Route path="/wedding" element={<WeddingPage />} />
              <Route path="/prewedding" element={<PreWeddingPage/>} />
              <Route path='/portraits' element={<PortraitsPage/>}/>
              <Route path='/bookings' element={<BookingPage CategorySelected={selectedCategory}/>}/>
              <Route path='/contact' element={<ContactUsPage/>}/>
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/*' element={<NotFoundPage/>}/>
            </Routes>
          </Suspense>
        </div>

        <BottomCard />
      </div>
  )
}

export default App
