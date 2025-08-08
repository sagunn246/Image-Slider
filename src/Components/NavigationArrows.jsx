import { ChevronLeft, ChevronRight } from "lucide-react";
export const NavigationArrows = ({ prevSlide, nextSlide }) => (
  <>
    <button
      onClick={prevSlide}
      className="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-gray-800/50 text-white rounded-full cursor-pointer 
                 transition-all duration-300 ease-in-out"
      aria-label="Previous Slide"
    >
      <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-gray-800/50 text-white rounded-full cursor-pointer 
                 transition-all duration-300 ease-in-out"
      aria-label="Next Slide"
    >
      <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
    </button>
  </>
);
