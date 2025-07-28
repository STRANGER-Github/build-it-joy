import panoImage from "@/assets/wide-image.png"

const ScrollingBanner = () => {
  return (
    <div className="overflow-hidden w-full h-[350px] relative">
      <div className="absolute inset-0 flex animate-scroll-left">
        {/* Duplicate image to create seamless loop */}
        <img
          src={panoImage}
          alt="Scrolling panoramic"
          className="h-full object-cover"
          style={{ width: "400%" }} // 4x screen width
        />
        <img
          src={panoImage}
          alt="Scrolling panoramic"
          className="h-full object-cover"
          style={{ width: "400%" }}
        />
      </div>
    </div>
  )
}

export default ScrollingBanner
