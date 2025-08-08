import React, { useState, useEffect } from "react";
import { SlidesContainer } from "./Components/SlidesContainer";
import { DotIndicators } from "./Components/DotIndicators";
import { ProgressBar } from "./Components/ProgressBar";
import { NavigationArrows } from "./Components/NavigationArrows";
import AnimatedHeader from "./Components/AnimatedHeader";
export default function App() {
  const slides = [
    { url: "img1.jpg" },
    { url: "img2.jpg" },
    { url: "img3.jpg" },
    { url: "img4.jpg" },
    { url: "img5.jpg" },
  ];

  const SLIDE_INTERVAL = 2000;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4 font-inter">
      <h1 className="text-5xl font-bold mb-5">
        <span className="inline-block animate-blink bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
          Auto Slide
        </span>
      </h1>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl group">
        <SlidesContainer slides={slides} currentSlide={currentSlide} />
        <NavigationArrows prevSlide={prevSlide} nextSlide={nextSlide} />
        <ProgressBar currentSlide={currentSlide} interval={SLIDE_INTERVAL} />
        <DotIndicators
          slides={slides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>

      <style>{`
        @keyframes slide-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-slide-progress {
          animation-name: slide-progress;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
}
