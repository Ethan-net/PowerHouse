import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo";
import { X, Menu } from "lucide-react"; // using lucide icons

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav bg-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center px-6 py-5">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/loadcal">
            <button className="hover:bg-red-600 hover:text-white p-2 rounded-lg text-xs transition-all duration-300">
              Load Calculator
            </button>
          </Link>
          <Link to="/products">
            <button className="hover:bg-red-600 hover:text-white p-2 rounded-lg text-xs transition-all duration-300">
              Products
            </button>
          </Link>
          <Link to="/Bookinspect">
            <button className="hover:bg-red-600 hover:text-white p-2 rounded-lg text-xs transition-all duration-300">
              Book Inspection
            </button>
          </Link>
          <button className="bg-red-500 text-white p-3 rounded-xl text-sm">
            Contact us
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Slide */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-md`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <Logo />
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-5 p-5 text-sm">
          <Link to="/loadcal" onClick={() => setIsOpen(false)}>
            <button className="hover:bg-red-600 hover:text-white p-2 rounded-lg w-full text-left">
              Load Calculator
            </button>
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>
            <button className="hover:bg-red-600 hover:text-white p-2 rounded-lg w-full text-left">
              Products
            </button>
          </Link>
          <Link to="/Bookinspect" onClick={() => setIsOpen(false)}>
            <button className="hover:bg-red-600 hover:text-white p-2 rounded-lg w-full text-left">
              Book Inspection
            </button>
          </Link>
          <button className="bg-red-500 text-white p-3 rounded-xl text-sm w-full mt-4">
            Contact us
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
        />
      )}
    </div>
  );
}
