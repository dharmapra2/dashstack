import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: "fa-solid fa-gauge" },
    { name: "Products", icon: "fa-solid fa-box-open" },
    { name: "Favorites", icon: "fa-solid fa-heart" },
    { name: "Inbox", icon: "fa-solid fa-inbox" },
    { name: "Order Lists", icon: "fa-solid fa-list-check" },
    { name: "Product Stock", icon: "fa-solid fa-boxes-stacked" },
  ];

  const pageMenu = [
    { name: "Pricing", icon: "fa-solid fa-money-bill-wave" },
    { name: "Calender", icon: "fa-solid fa-calendar-days" },
    { name: "To-Do", icon: "fa-solid fa-clipboard-check" },
    { name: "Contact", icon: "fa-solid fa-address-book" },
    { name: "Invoice", icon: "fa-solid fa-receipt" },
    { name: "UI Elements", icon: "fa-brands fa-elementor" },
    { name: "Team", icon: "fa-solid fa-people-group" },
    { name: "Table", icon: "fa-solid fa-table" },
  ];

  const logOutMenu = [
    { name: "Settings", icon: "fa-solid fa-gear" },
    { name: "Log Out", icon: "fa-solid fa-power-off" },
  ];

  return (
    <aside className="row-span-2 flex flex-col gap-2 overflow-y-auto w-full">
      <div
        id="logo"
        className="h-[64px] w-32 self-center text-2xl place-content-center font-bold"
      >
        <span className="text-primary">Dash</span>
        <span className="text-black">Stack</span>
      </div>
      <section className="h-screen flex flex-col gap-3 w-full">
        <ul className="space-y-2 flex flex-col h-[35%] border-b-2 border-gray-400 pb-2">
          {menu.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex gap-6 w-full h-full`}
            >
              {/* Left primary strip (visible only when active) */}
              <span
                className={`w-1 rounded-r ${
                  activeItem === item.name ? "bg-[#407BFF]!" : "bg-transparent"
                }`}
              ></span>

              <div
                className={`pl-8 flex gap-5 items-center-safe rounded-lg w-[75%] 
                  ${
                    activeItem === item.name
                      ? "bg-[#407BFF]! text-white"
                      : "bg-transparent"
                  }
                  `}
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="uppercase text-gray-400 self-center font-secondary text-sm font-bold">
          pages
        </div>
        <ul className="space-y-2 flex flex-col h-[45%] border-b-2 border-gray-400">
          {pageMenu.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex gap-6 w-full h-full`}
            >
              {/* Left primary strip (visible only when active) */}
              <span
                className={`w-1 rounded-r ${
                  activeItem === item.name ? "bg-[#407BFF]!" : "bg-transparent"
                }`}
              ></span>

              <div
                className={`pl-8 flex gap-5 items-center-safe rounded-lg w-[75%] 
                  ${
                    activeItem === item.name
                      ? "bg-[#407BFF]! text-white"
                      : "bg-transparent"
                  }
                  `}
              >
                {/* <span className="text-lg">{item.icon}</span> */}
                <FontAwesomeIcon icon={item.icon} className="text-lg" />

                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 flex flex-col h-[10%]">
          {logOutMenu.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex gap-6 w-full h-full`}
            >
              {/* Left primary strip (visible only when active) */}
              <span
                className={`w-1 rounded-r ${
                  activeItem === item.name ? "bg-[#407BFF]!" : "bg-transparent"
                }`}
              ></span>

              <div
                className={`pl-8 flex gap-5 items-center-safe rounded-lg w-[75%] 
                  ${
                    activeItem === item.name
                      ? "bg-[#407BFF]! text-white"
                      : "bg-transparent"
                  }
                  `}
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
