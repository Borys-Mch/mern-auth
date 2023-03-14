import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#03202a] border-b-4 border-[#ff5e00]">
      <div className="container mx-auto py-5 flex flex-row justify-between items-center text-[#ffe66b]">
        <h2 className="font-bold text-3xl">LOGO</h2>
        <nav className="flex space-x-4">
          <Link className="hover:text-[#FFF]" to="/">
            Home
          </Link>
          <Link className="hover:text-[#FFF]" to="/create-recipe">
            Create Recipe
          </Link>
          <Link className="hover:text-[#FFF]" to="/saved-recipes">
            Saved Recipes
          </Link>
        </nav>
        <Link
          to="/auth"
          className=" p-3 border border-[#ff5e00] rounded-2xl hover:text-white">
          Login/Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
