import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './components/Footer';
import History from './Pages/History';
import Details from './Pages/Details';
import AOS from 'aos'
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-slate-900 dark:text-white">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
