import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar() {
  return (
    <header className="h-full w-full row-span-1 shadow p-2 flex justify-between">
      <section className="w-[30%] flex items-center gap-7">
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className="font-semibold text-2xl cursor-pointer"
        />

        <div className="relative flex items-center h-8 justify-end w-[90%] outline-2 rounded-2xl">
          <div className="cursor-pointer ml-4">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </div>
          <input
            autoComplete="off"
            autoFocus
            placeholder="Search"
            type="text"
            className="h-full w-full px-3 outline-none"
            id="search"
          />
          <div className="cursor-pointer mr-4 hidden" id="search-close">
            <svg
              width={13}
              height={13}
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
            </svg>
          </div>
        </div>
      </section>
      <section className="w-[30%] flex items-center justify-end gap-8 mr-5">
        {/* Notification */}
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-xl text-blue-600" />
          <span className="absolute -top-1 -right-1 text-[10px] bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center">
            6
          </span>
        </div>

        {/* Language Selector */}
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <img
            src="https://flagcdn.com/in.svg"
            alt="IN"
            className="w-7 h-5 object-cover"
          />
          <p className="text-md font-medium text-gray-700">English</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-sm text-gray-500"
          />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-800">
              Moni Roy
            </span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-xs text-gray-500"
          />
        </div>
      </section>
    </header>
  );
}

export default Navbar;
