import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/images/hynt-logo.png";

import router from "next/router";
import Link from "next/link";
import { IMenubar } from "../../types/Menubar";
import { FILE_URL } from "../../config/urls";

interface NavBarProps {
  scrolled?: boolean;
  menubar?: IMenubar;
}

const NavBar = ({ scrolled = false, menubar }: NavBarProps) => {
  const menubarContent = menubar?.data.attributes;
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className={`pb-4 px-6 w-full bg-white sticky top-0 left-0 z-40 max-w-[100vw] overflow-x-clip lg:h-[95px] ${
        scrolled ? "shadow-md" : ""
      } `}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-screen md:items-center md:flex md:px-8">
        <div>
          <div className="md:block">
            <div className="relative right-[25px]">
              <div className="flex items-center">
                <Link href={"/"}>
                  <Image
                    width={152}
                    height={40}
                    src={
                      menubarContent?.logo?.data?.attributes?.url || ""
                        ? `${FILE_URL}${
                            menubarContent?.logo?.data?.attributes?.url || ""
                          }`
                        : logo
                    }
                    alt="Hynt Logo"
                  />
                </Link>
                <span
                  onClick={() => {
                    router.push("/explore");
                  }}
                  className={`invisible lg:visible animated cursor-pointer self-center text-sm font-semibold whitespace-nowrap text-[#A9A6A6] lg:pl-16 hover:text-black`}
                >
                  {`${menubarContent?.exploreText || "Explore"}`}
                </span>

                <div className="md:hidden relative] ml-[60px]">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:outline-gray-100"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="#663100"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="#444444"
                        viewBox="0 0 24 24"
                        stroke="#663100"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-y-[14px] inset-x-4 items-center pointer-events-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6042 16.4167H17.4521L17.0437 16.0229C18.4729 14.3604 19.3333 12.2021 19.3333 9.85417C19.3333 4.61875 15.0896 0.375 9.85417 0.375C4.61875 0.375 0.375 4.61875 0.375 9.85417C0.375 15.0896 4.61875 19.3333 9.85417 19.3333C12.2021 19.3333 14.3604 18.4729 16.0229 17.0437L16.4167 17.4521V18.6042L23.7083 25.8812L25.8812 23.7083L18.6042 16.4167ZM9.85417 16.4167C6.22292 16.4167 3.29167 13.4854 3.29167 9.85417C3.29167 6.22292 6.22292 3.29167 9.85417 3.29167C13.4854 3.29167 16.4167 6.22292 16.4167 9.85417C16.4167 13.4854 13.4854 16.4167 9.85417 16.4167Z"
                    fill="black"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className={`search-bar animated placeholder-[#CFCFCF] h-[45px] mb-0 md:mb-0 xl:mb-0 lg:mb-0  xl:w-[420px] lg:w-[400px] block  rounded-xl border-[0.5px] hover:border-[2px] outline-gray-300 border-gray-300 bg-white text-[black] text-[14px] px-[45px] font-bold`}
                placeholder={
                  menubarContent?.searchInputField || "Search for Hynts"
                }
              />
            </div>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <ul
                className="
               pt-4
               text-base text-gray-700
               md:flex
               md:justify-between
               md:pt-0"
              >
                <li>
                  <button
                    type="button"
                    className={`w-full border mb-3 animated shadow-custom rounded-lg text-sm px-5 py-2 text-center pr outline-none hover:bg-[#cecece] font-bold`}
                  >
                    {menubarContent?.loginText || "Log In"}
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    className={`w-full border mb-3 animated shadow-custom rounded-lg text-sm px-5 py-2 text-center pr outline-none hover:bg-[#cecece] font-bold`}
                  >
                    {menubarContent?.exploreText || "Explore"}
                  </button>
                </li>

                <li>
                  <button
                    type="button"
                    className={`w-full animated text-white bg-[#F1C093] hover:bg-[#F8A985] focus:outline-none text-sm rounded-md px-2 py-2 text-center font-bold`}
                  >
                    {menubarContent?.signUpText || "Get Access"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:inline-block">
          <ul
            className="
               pt-4
               text-base text-gray-700
               md:flex
               md:justify-between
               md:pt-0"
          >
            <li>
              <button
                type="button"
                className={`animated shadow-custom rounded-lg text-sm px-5 py-2 text-center md:mr-0 pr outline-none hover:bg-[#cecece] font-bold`}
              >
                {menubarContent?.loginText || "Log In"}
              </button>
            </li>

            <li>
              <button
                type="button"
                className={`animated ml-4 text-white bg-[#F1C093] hover:bg-[#F8A985] focus:outline-none text-sm rounded-md px-2 py-2 text-center mr-3 md:mr-0 font-bold`}
              >
                {menubarContent?.signUpText || "Get Access"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
