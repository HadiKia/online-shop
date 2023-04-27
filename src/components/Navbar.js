import React from "react";
import { Link } from "react-router-dom";
import logo from './logo192.png'

const ulStyle = "fixed top-0 left-0 bg-[#2c454d] text-[#f4f4f4] h-screen pt-24 flex flex-col items-start gap-y-2 z-20 duration-500 md:translate-x-0 md:flex-row md:h-auto md:relative md:py-5 md:gap-x-6 md:bg-[#f4f4f4] md:text-[#2c454d] md:px-6 md:text-lg md:hidden"
const ulDesktopStyle = "hidden md:flex items-start gap-y-2 z-20 duration-500 py-5 gap-x-6 text-[#2c454d] px-6 text-lg "
const liStyle = "py-3 pl-6 pr-32 w-full cursor-pointer md:px-0 md:w-auto md:py-3 md:hover:text-[#f4715b] border-b-2 border-[#f1f1f100] md:hover:border-[#f4715b] duration-700 hover:bg-[#f1f1f120]"


const Navbar = ({open,clickHandler}) => {
  return (
    <div className="container max-w-screen-2xl mx-auto flex justify-end md:items-center md:justify-between mb-14">
      {/* nav mobile */}
      <ul open={open} className={`${ulStyle} ${open ? "translate-x-0": "-translate-x-full"}`}>
        <li onClick={() => clickHandler()} className={liStyle}><Link to="/">Home Page</Link></li>
        <li onClick={() => clickHandler()} className={liStyle}><Link to="/products">Products</Link></li>
        <li onClick={() => clickHandler()} className={liStyle}><Link to="/about">About</Link></li>
        <div className="flex items-center gap-x-1 fixed bottom-5 left-3 text-sm md:hidden">
          <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" /></svg></span>
          <p>developed by HadiKia</p>
        </div>
      </ul>

      <div onClick={()=>clickHandler()} open={open} className={`${open ? "block": "hidden"} fixed top-0 left-0 right-0 bottom-0 bg-gray-600 opacity-50 z-10`}></div>

      {/* nav desktop */}
      <ul className={ulDesktopStyle}>
        <li className={liStyle}><Link to="/">Home Page</Link></li>
        <li className={liStyle}><Link to="/products">Products</Link></li>
        <li className={liStyle}><Link to="/about">About</Link></li>
      </ul>

        <div className="bg-white w-14 h-[52px] my-4 mx-5 flex items-center rounded-xl shadow-md active:scale-90 duration-700 md:z-10 text-[#2c454d] cursor-pointer">
          <img src={logo} alt="logo" className="p-1.5"/>
          </div>
        {/* <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg></span> */}

    </div>
  );
};

export default Navbar;
