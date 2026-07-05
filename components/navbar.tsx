"use client";
import { Home } from "reicon-react";

const Navbar = () => {
  return (
    <header className="fixed">
      <nav className="bg-white w-fit px-10 py-4 rounded-full mt-5 border">
        <ul className="flex gap-10 items-center">
          <li className="flex items-end gap-2">
            <Home />
            Home
          </li>
          <li>Projects</li>
          <li>Github</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
