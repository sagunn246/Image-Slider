export const ProgressBar = ({ currentSlide, interval }) => (
  <div
    key={currentSlide}
    className="absolute bottom-0 left-0 w-full h-1 bg-white/30"
  >
    <div
      className="h-full bg-white animate-slide-progress"
      style={{ animationDuration: `${interval / 1000}s` }}
    />
  </div>
);
