import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className={`${styles.paddingX} w-full flex justify-between items-center max-w-7xl mx-auto`}>
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-text-base text-[18px] font-bold cursor-pointer leading-tight tracking-wider">
              Muse Semu
            </span>
            <span className="text-accent text-[13px] font-medium hidden sm:block leading-tight tracking-wide">
              Full Stack & DevOps
            </span>
          </div>
        </Link>

        <ul className="list-none hidden lg:flex flex-row items-center gap-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative px-3 py-2 rounded-full cursor-pointer transition-all duration-300 group whitespace-nowrap
                ${
                  active === nav.title 
                    ? "text-accent bg-white/5 shadow-[0_0_15px_rgba(56,189,248,0.15)]" 
                    : "text-secondary hover:text-text-base hover:bg-white/5"
                }
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="text-[15px] font-medium tracking-wide">
                {nav.title}
              </a>
              {/* Active Indicator Underline */}
              {active === nav.title && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-accent rounded-t-full" />
              )}
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-slate-950 border border-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] w-full text-center py-2 rounded-lg transition-all duration-300 ${
                    active === nav.title 
                      ? "text-accent bg-tertiary shadow-md" 
                      : "text-secondary hover:text-text-base hover:bg-white/5"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block w-full">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
