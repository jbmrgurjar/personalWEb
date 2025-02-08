import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import img from "../src/assets/ai.png";
import img from "../Header/ai.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <h1 className="text-4xl font-mono font-bold text-cyan-950">VISHNU GURJAR</h1>
          </Link>
          <div className="">
          <button
            onClick={() => setIsOpen(!isOpen )}
            className="md:hidden text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul
            className={`absolute md:static top-16 right-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 transition-all ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="py-2"><Link to="/" className="hover:text-black-300">Home</Link></li>
            <li className="py-2"><Link to="/about" className="hover:text-black-300">About</Link></li>
            <li className="py-2"><Link to="/contact" className="hover:text-black-300">Contact</Link></li>
            <li className="py-2"><Link to="/github" className="hover:text-black-300">Github</Link></li>
            <li className="py-2"><Link to="/project" className="hover:text-black-300">Project</Link></li>
          </ul>
          </div>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>

            <div className="dropdown dropdown-end">
              <div className="w-10 rounded-full btn btn-ghost btn-circle avatar">
                <Link to="https://jbmrgurjar.github.io/portfolio1/">
                  <img className="rounded-3xl w-16" alt="component" src={img} />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["home", "about", "contact", "github", "project"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item}`}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
