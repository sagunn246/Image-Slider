export const DotIndicators = ({ slides, currentSlide, setCurrentSlide }) => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 
                   ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);
