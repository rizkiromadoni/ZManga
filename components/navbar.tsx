"use client";

import React, { useState } from "react";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBarsStaggered,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="mb-5">
      <div className="bg-[#3b3c4c] text-[#9ca9b9] flex w-full h-[61px] justify-between relative z-20 shadow-md">
        <div
          className="bg-[#45475a] text-[#eeeeee] h-full p-[18px] cursor-pointer md:hidden"
          onClick={() => {
            setIsSearchOpen(false)
            setIsMenuOpen(!isMenuOpen);
        }}
        >
          <FontAwesomeIcon icon={faBarsStaggered} className="text-[25px]" />
        </div>
        <div className="w-full px-3 text-left flex items-center">
          <a
            href="#"
            className="text-[27px] text-[#eeeeee] font-extrabold hover:text-[#3453d1] transition-colors duration-500"
          >
            <FontAwesomeIcon icon={faReact} className="text-[#3453d1] mr-2" />
            ZManga
          </a>
          <div className="hidden md:flex gap-2 ml-5">
            <a className="bg-[#45475a] text-[#9ca9b9] rounded-md px-[15px] py-[8px] text-[16px] font-semibold tracking-wide cursor-pointer hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">
              Manga List
            </a>
            <a className="bg-[#45475a] text-[#9ca9b9] rounded-md px-[15px] py-[8px] text-[16px] font-semibold tracking-wide cursor-pointer hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">
              Genre List
            </a>
            <a className="bg-[#45475a] text-[#9ca9b9] rounded-md px-[15px] py-[8px] text-[16px] font-semibold tracking-wide cursor-pointer hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">
              Bookmark
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="bg-[#45475a] text-[#eeeeee] h-full p-[18px] cursor-pointer md:hidden" onClick={() => {
                setIsMenuOpen(false);
                setIsSearchOpen(!isSearchOpen);
            }}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[25px] font-bold"
            />
          </div>
          <div className="hidden md:flex h-full items-center">
            <div className="py-3 px-4 bg-[#2f303e] rounded-sm flex focus-within:border-2 border-[#45475a]">
              <input
                type="text"
                name="search"
                id="search"
                className="bg-[#2f303e] outline-none h-4 text-sm font-extralight"
                placeholder="Search..."
                autoComplete="off"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-sm pl-2"
              />
            </div>
          </div>
          <div className="h-full px-[12px] cursor-pointer flex items-center">
            <div className="rounded-full h-[35px] w-[35px] bg-gray-300" />
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={
          "w-full p-[10px] flex flex-col gap-2 bg-[#3b3c4c] border-t-4 border-[#3453d1] transition-transform md:hidden z-10 absolute" +
          (isMenuOpen ? "" : " -translate-y-[100%]")
        }
      >
        <a
          href="#"
          className="mx-[10px] px-[15px] py-[8px] bg-[#45475a] text-[#9ca9b9] rounded-md font-semibold text-[16px] tracking-wide hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors"
        >
          Manga List
        </a>
        <a
          href="#"
          className="mx-[10px] px-[15px] py-[8px] bg-[#45475a] text-[#9ca9b9] rounded-md font-semibold text-[16px] tracking-wide hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors"
        >
          Genre List
        </a>
        <a
          href="#"
          className="mx-[10px] px-[15px] py-[8px] bg-[#45475a] text-[#9ca9b9] rounded-md font-semibold text-[16px] tracking-wide hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors"
        >
          Bookmark
        </a>
      </div>

      {/* mobile search */}
      <div
        className={
          "w-full p-[10px] flex flex-col gap-2 bg-[#3b3c4c] border-t-4 border-[#3453d1] transition-transform md:hidden z-10 absolute" +
          (isSearchOpen ? "" : " -translate-y-[100%]")
        }
      >
        <div className="py-3 px-4 bg-[#2f303e] rounded-sm flex focus-within:border-2 border-[#45475a] border-solid justify-between">
          <input
            type="text"
            name="search"
            id="search"
            className="bg-[#2f303e] outline-none h-4 text-sm font-extralight w-full"
            placeholder="Search..."
            autoComplete="off"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm pl-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
