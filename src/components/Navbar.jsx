import React, { useEffect, useState } from 'react'
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';
import {Link} from 'react-router-dom';




export default function Navbar() {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const element = document.documentElement;
  const navlink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "History",
      link: "/history",
    }
  ]

  const [col, setCol] = useState(0);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      //console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      //console.log("light theme");
    }
  }, [theme]);

  return (
    <div>
      <header className=' relative z-[999] border-b-[1px] border-primary/50 bg-gradient-to-l from-gray-700 via-gray-800 to-gray-700 text-white shadow-lg'>
        <nav className=' container flex h-[70px] items-center justify-between py-8 sm:px-20 xl:px-60'>
            <div className="text-2xl text-white md:text-3xl ">
              <Link to="/" className=" flex gap-1">
                Lucky
                <span className="inline-block font-bold text-blue-500">Draw</span>
              </Link>
            </div>
            <div className="hidden sm:block">
                <div className=' flex gap-8'>
                  <ul className="flex items-center gap-10">
                    {navlink.map((na, index) => {
                      return (
                        <li className="group relative cursor-pointer" key={index}>
                          <Link
                            to={na.link}
                            className={`flex h-[72px] items-center gap-[2px] text-lg hover:text-gray-400 font-medium ${col === index ? 'text-blue-500': ''}`}
                            onClick={() => {
                              setCol(index)
                              console.log(index);
                            }}
                          >
                            {na.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className='flex justify-center items-center hover:text-gray-300'>
                    {theme === "dark" ? (
                        <BiSolidSun
                          onClick={() => setTheme("light")}
                          className="text-2xl"
                        />
                      ) : (
                        <BiSolidMoon
                          onClick={() => setTheme("dark")}
                          className="text-2xl"
                        />
                    )}
                  </div>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center gap-4 sm:hidden ">
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}

              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
        </nav>
      </header>
      <ResponsiveMenu  showMenu={showMenu} color={col}/>
    </div>
  )
}
