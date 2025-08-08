export const SlidesContainer = ({ slides, currentSlide }) => (
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div key={index} className="relative w-full flex-shrink-0">
        <img
          src={slide.url}
          alt={`Slide ${index + 1}`}
          className="w-full h-auto object-cover"
        />
      </div>
    ))}
  </div>
);
