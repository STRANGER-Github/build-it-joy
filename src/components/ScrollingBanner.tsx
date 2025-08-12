import panoImage from "@/assets/wide-image.jpeg";
import logo from "@/assets/main-logo-with-bg.png";

const ScrollingBanner = () => {
  return (
    <div className="mt-6 px-4">
      <div className="overflow-hidden w-full rounded-xl h-[400px] relative">
        {/* Scrolling background container */}
        <div className="absolute inset-0 flex w-[200%] animate-scroll-left">
          <img
            src={panoImage}
            alt="Scrolling panoramic"
            className="w-1/2 h-full object-cover grayscale"
          />
          <img
            src={panoImage}
            alt="Scrolling panoramic"
            className="w-1/2 h-full object-cover grayscale"
          />
        </div>

        {/* Desktop Logo */}
        <div className="absolute hidden sm:block top-3 left-3 z-50">
          <img src={logo} alt="Logo" className="h-12 rounded-xl w-auto" />
        </div>

        {/* Mobile Logo */}
        <div className="absolute sm:hidden top-1 left-1 z-50">
          <img src={logo} alt="Logo" className="rounded-xl h-9 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
