import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Home
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            About
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Projects
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
