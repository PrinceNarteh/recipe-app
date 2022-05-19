import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-md py-5 bg-white fixed w-full z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h3 className="text-xl text-teal-500 font-semibold">
          Chef<span className="text-red-500">Touch</span>
        </h3>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/add-menu">Add Menu</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
