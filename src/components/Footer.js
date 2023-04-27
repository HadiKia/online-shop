import React from 'react';

const Footer = () => {
    return (
        <footer className='container max-w-screen-2xl mx-auto'>
          <div className='flex items-center justify-between px-5 py-4 text-[#2c454d]'>
            <div className='flex items-center justify-between gap-x-1 md:gap-x-2'>
              <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" /></svg></span>
              <p className='md:text-xl'>developed by HadiKia</p>
            </div>
            <div className='flex items-center justify-between gap-x-3 text-xl md:text-2xl md:gap-x-4 xl:text-3xl xl:gap-x-5'>
             <a href="https://www.github.com/HadiKia"><i className="fa-brands fa-github"></i></a>
             <a href="https://www.linkedin.com/in/"><i className="fa-brands fa-linkedin"></i></a>
             <a href="https://www.instagram.com/ihadikia"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </footer>
    );
};

export default Footer;