import React, { useState } from "react";
import BurgerIcon from "../icon/menu-burger.svg";
import BackgroundMusic from "../BackgroundMusic";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-end p-4">
        <button
          className="text-2xl text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <img src={BurgerIcon} alt="Menu Icon" className="w-8 h-8" />
        </button>
        {/* Mene list */}
        {menuOpen && (
          <div className="absolute top-0 right-24 bg-white p-4 shadow-md">
            <ul className="text-xl font-mono ">
              <li>Story 1</li>
              <li>Story 2</li>
              <li>Story 3</li>
            </ul>
          </div>
        )}
      </div>
      <BackgroundMusic />
    </>
  );
};

export default Navbar;
