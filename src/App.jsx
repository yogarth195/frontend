import { lazy, Suspense, useEffect, useState } from 'react'
import './index.css' 
import { SideBar } from './components/SideBar'
import { ImageContainer } from './components/ImageContainer';
import img1 from './assets/D.D.D.jpg'
import { BottomCard } from './components/BottomCard';
import { Route, Router, Routes } from 'react-router-dom';
import SkeletonPage from './pages/SkeletonPage.';
import { PortraitsPage } from './pages/PortraitsPage';

const WeddingPage = lazy(()=> import("./pages/WeddingPage"))
function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };
  // Apply dark mode class to <html> on mount and state change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  // Function to toggle the side bar..
  const [showSideBar, setShowSideBar] = useState(false);
    useEffect(() => {
        const storedSidebarState = JSON.parse(localStorage.getItem('sidebarState'));
        if (storedSidebarState !== null) {
            setShowSideBar(storedSidebarState);
          }
      }, []);
        const toggleSideBar = () => {
          setShowSideBar((e) => {
            const newState = !e;
            localStorage.setItem('sidebarState', JSON.stringify(newState));
            return newState;
          });
    };

  return (
      <div className={`font-dmSerif transition-colors duration-300 bg-white dark:bg-black`}>
        {/* Sidebar */}
        <SideBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        {/* Main content */}
        <div className="pt-16">
          <Suspense fallback={<SkeletonPage />}>
            <Routes>
              <Route path="/" element={
                <>
                  <div className="flex justify-center text-2xl dark:text-white p-2">
                    Hello, Welcome to our website
                  </div>
                  <div className="flex flex-col gap-5 px-3 my-3 dark:text-gray-900">
                    <div className="transition-all duration-300 ease-in-out flex flex-row flex-wrap items-start gap-20 p-2 justify-center">
                      <div className='transition-all duration-300 ease-in-out'>
                        <ImageContainer imageUrl={img1} />
                      </div>
                      <div className='transition-colors'>
                        <ImageContainer imageUrl={img1} />
                      </div>
                      <div className='transition-colors'>
                        <ImageContainer imageUrl={img1} />
                      </div>
                    </div>
                    <div className='text-black dark:text-white'>Not Something</div>
                    <div className="transition-colors dark:bg-blue-400 bg-blue-500 ">Div 2</div>
                    <div className="transition-colors dark:bg-green-400 bg-green-500 ">
                      <a href="/wedding">Weddings</a></div>
                    <div className='text-2xl text-black dark:text-white'>Bottom Div</div>
                  </div>
                </>
              } />
              <Route path="/wedding" element={<WeddingPage />} />
              <Route path='/portraits' element={<PortraitsPage/>}/>
            </Routes>
          </Suspense>
        </div>

        <BottomCard />
      </div>
      
  )
}

export default App
