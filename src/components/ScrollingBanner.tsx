import panoImage from "@/assets/wide-image.png";
import logo from "@/assets/main-logo-with-bg.png";

const ScrollingBanner = () => {
  return (
    <div className="overflow-hidden m-1 w-full rounded-xl h-[350px] relative">
      {/* Scrolling background images */}
      <div className="absolute inset-0 flex animate-scroll-left">
        <img
          src={panoImage}
          alt="Scrolling panoramic"
          className="h-full object-cover"
          style={{ width: "400%" }}
        />
        <img
          src={panoImage}
          alt="Scrolling panoramic"
          className="h-full object-cover"
          style={{ width: "400%" }}
        />
      </div>

      {/* Desktop Logo (Visible on sm and above) */}
      <div className="absolute hidden sm:block top-3 left-3 z-50">
        <img src={logo} alt="Logo" className="h-12 rounded-xl w-auto" />
      </div>

      {/* Mobile Logo (Visible below sm only) */}
      <div className="relative sm:hidden  left-2 top-2">
        <img src={logo} alt="Logo" className="rounded-xl h-9 w-auto" />
      </div>

    </div>
  );
};

export default ScrollingBanner;
