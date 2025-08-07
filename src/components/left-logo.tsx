import React from "react";
import logo from "@/assets/main-logo-with-bg.png";

const LeftLogo = () => {
  return (
    <div className="absolute top-3 left-3 z-50 ">
      <img src={logo} alt="Left Logo" className="h-10 rounded-xl w-auto" />
    </div>
  );
};

export default LeftLogo;
