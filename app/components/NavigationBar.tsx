"use client"

import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";


const NavigationBar = () => {
  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  };

  return (

    <header className="bg-slate-800 text-white  shadow-md ">

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Side: Logo and Navigation Links */}
        <Link href="/">
        <div className="flex items-center">

          <Image
            alt="Company logo"
            className="h-12 w-12 mr-3"
            height="50"
            src="/logo.svg"
            width="70"
          />
          <span className="text-xl font-bold">Portfolio</span>
        </div></Link>
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-6 ml-6">
          <Link className="text-white hover:text-[#ED1B23]" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-[#ED1B23]" href="#About">
            About
          </Link>
          <Link className="text-white hover:text-[#ED1B23]" href="#Projects">
            Projects
          </Link>
          <Link className="text-white hover:text-[#ED1B23]" href="#Blogs">
            Blog
          </Link>
          <Link className="text-white hover:text-[#ED1B23]" href="#Contact">
            Contact
          </Link>
        </nav>

        {/* Right Side: Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link href="#">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Download CV
          </button></Link>
          <Link href="#Contact">
          <button className="bg-[#ED1B23] text-white px-4 py-2 rounded hover:bg-[#e64d52]">
            Hire Me
          </button></Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className=" lg:hidden">
          <button
            className="white focus:outline-none text-xl"
            onClick={toggleMenu}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden lg:hidden" id="mobile-menu">
        <nav className="px-4 pt-4 pb-2 space-y-4">
          <Link className="block text-white hover:text-[#ED1B23]" href="/">
            Home
          </Link>
          <Link className="block text-white hover:text-[#ED1B23]" href="#About">
            About
          </Link>
          <Link className="block text-white hover:text-[#ED1B23]" href="#Projects">
            Projects
          </Link>
          <Link className="block text-white hover:text-[#ED1B23]" href="#Blogs">
            Blog
          </Link>
          <Link className="block text-white hover:text-[#ED1B23]" href="#Contact">
            Contact
          </Link>
          <Link href="#">
          <button className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Download CV
          </button>
          </Link>
          <Link href="#Contact">
          <button className="w-full bg-[#ED1B23] text-white px-4 py-2 rounded hover:bg-[#e64d52]">
            Hire Me
          </button>
          </Link>
        </nav>
      </div>
    </header>

  );
};

export default NavigationBar;
