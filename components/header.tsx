"use client";

import React, { useState } from "react";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightToBracket,
  faBarsStaggered,
  faMagnifyingGlass,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./ui/container";
import avatar from "@/public/no-avatar.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#3b3c4c] text-[#9ca9b9] w-full shadow-md">
        <Container className="flex justify-between w-full h-[61px] relative z-20 bg-[#3b3c4c] text-[#9ca9b9]">
          <button
            className="bg-[#45475a] text-[#eeeeee] h-full p-[18px] cursor-pointer md:hidden"
            onClick={() => {
              setIsSearchOpen(false);
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <FontAwesomeIcon icon={faBarsStaggered} className="text-[25px]" />
          </button>
          <div className="w-full px-3 text-left flex items-center lg:pl-0">
            <a
              href="#"
              className="text-[27px] text-[#eeeeee] font-extrabold hover:text-[#3453d1] transition-colors duration-500"
            >
              <h1>
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-[#3453d1] mr-2"
                />
                ZManga
              </h1>
            </a>
            <ul className="hidden md:flex gap-2 ml-5">
              <li>
                <a className="bg-[#45475a] text-[#9ca9b9] rounded-md px-[15px] py-[8px] text-[16px] font-semibold tracking-wide cursor-pointer hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">
                  Manga List
                </a>
              </li>
              <li>
                <a className="bg-[#45475a] text-[#9ca9b9] rounded-md px-[15px] py-[8px] text-[16px] font-semibold tracking-wide cursor-pointer hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">
                  Genre List
                </a>
              </li>
              <li>
                <a className="bg-[#45475a] text-[#9ca9b9] rounded-md px-[15px] py-[8px] text-[16px] font-semibold tracking-wide cursor-pointer hover:bg-[#3453d1] hover:text-[#ffffff] transition-colors">
                  Bookmark
                </a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <button
              className="bg-[#45475a] text-[#eeeeee] h-full p-[18px] cursor-pointer md:hidden"
              onClick={() => {
                setIsMenuOpen(false);
                setIsSearchOpen(!isSearchOpen);
              }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-[25px] font-bold"
              />
            </button>
            <div className="hidden md:flex h-full items-center">
              <div className="py-3 px-4 bg-[#2f303e] rounded-sm flex">
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
            <div className="h-full px-[12px] cursor-pointer flex items-center relative lg:pr-0">
              <button
                className="rounded-full h-[40px] w-[40px] bg-[url('/no-avatar.jpg')] bg-cover bg-no-repeat"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              />

              {/* user menu */}
              <ul
                className={
                  "absolute z-40 top-16 right-1 bg-[#3b3c4c] rounded-md" +
                  (isUserMenuOpen ? "" : " hidden")
                }
              >
                <li className="m-[7px]">
                  <a
                    href="#"
                    className="text-left w-28 hover:bg-[#45475a] flex items-center px-[10px] py-[7px] rounded-md text-[13px] text-[#9ca9b9] font-semibold tracking-wide"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightToBracket}
                      className="mr-3"
                    />
                    Login
                  </a>
                </li>
                <li className="m-[7px]">
                  <a
                    href="#"
                    className="text-left w-28 hover:bg-[#45475a] flex items-center px-[10px] py-[7px] rounded-md text-[13px] text-[#9ca9b9] font-semibold tracking-wide"
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
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
        <div className="py-3 px-4 bg-[#2f303e] rounded-sm flex border-solid justify-between">
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
    </>
  );
};

export default Header;
