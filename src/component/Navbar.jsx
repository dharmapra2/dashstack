import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Navbar() {
  return (
    <header className="h-full w-full row-span-1 shadow p-2 flex justify-between">
      <section className="w-[40%] flex items-center gap-7">
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          className="font-semibold text-2xl cursor-pointer"
        />

        <div className="relative flex items-center h-8 justify-end w-[60%] outline-2 rounded-2xl">
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
      <section className="w-[40%] flex items-center justify-between bg-red-900">
        <p>Englissh</p>
        <FontAwesomeIcon icon="fa-solid fa-bell" />
        <FontAwesomeIcon icon="fa-solid fa-globe" />
      </section>
    </header>
  );
}

export default Navbar;
