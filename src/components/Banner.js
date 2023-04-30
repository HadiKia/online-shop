import React from "react";
import bannerImg from "./banner.png";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto mb-20 min-h-[calc(100vh_-_280px)] md:min-h-[calc(100vh_-_300px)]">
      <div className="flex flex-col px-5 items-center gap-y-8 md:flex-row md:gap-x-4 mb-10">
        <div>
          <h1 className="text-[#f4715b] font-bold text-3xl mb-4">Online Shop</h1>
          <p className="text-[#2c454d] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="max-w-2xl"><img src={bannerImg} alt="banner" className="w-full" /></div>
      </div> 
      <div className="text-center md:text-left md:pl-5">
        <span className="bg-[#f4715b] text-white px-5 py-3 rounded-lg font-bold"><Link to="/products">See Products</Link></span>
      </div>
    </div>
  );
};

export default Banner;
