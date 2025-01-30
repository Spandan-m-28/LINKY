import React from "react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 backdrop-blur-lg shadow-lg border border-white/20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right_top,#a4acb7,#7c9ac9,#5586d9,#2e6fe5,#1254eb)] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold cursor-pointer">LINKY</span>
            <div className="flex space-x-4 text-gray-900">
              <Link className="hover:underline-offset-8 hover:underline" href="https://github.com/Spandan-m-28">Github</Link>
              <Link className="hover:underline-offset-8 hover:underline" href="https://www.instagram.com/spandan_m_28/">Instagram</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
