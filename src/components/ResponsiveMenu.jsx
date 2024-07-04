import React, { useState } from 'react'
import {Link} from 'react-router-dom';


export default function ResponsiveMenu({ showMenu, color }) {

    const [col, setCol] = useState(color);


    const navlink = [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Winner History",
          link: "/history",
        }
    ]

    const currentYear = new Date().getFullYear();

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[60%] flex-col  justify-between bg-gray-600 dark:bg-slate-800 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
        <div className=' card'>
            <nav className=' mt-12'>
                <ul className="space-y-4 text-xl">
                    {navlink.map((na, index) => {
                      return (
                        <li className="group relative cursor-pointer" key={index}>
                          <Link
                            to={na.link}
                            className={` mb-5 inline-block font-semibold ${col === index ? 'dark:text-blue-500 text-blue-400': ''}`}
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
            </nav>
        </div>
        <div className="footer">
            <h1>© {currentYear} All Rights Reserved</h1>
        </div>
    </div>
  )
}
