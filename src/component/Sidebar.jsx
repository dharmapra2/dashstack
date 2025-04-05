import React, { useState } from "react";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: "📊" },
    { name: "Products", icon: "📦" },
    { name: "Favorites", icon: "❤️" },
    { name: "Inbox", icon: "💬" },
    { name: "Order Lists", icon: "📋" },
    { name: "Product Stock", icon: "📑" },
  ];

  const pageMenu = [
    { name: "Pricing", icon: "📊" },
    { name: "Calender", icon: "📦" },
    { name: "To-Do", icon: "❤️" },
    { name: "Contact", icon: "💬" },
    { name: "Invoice", icon: "📋" },
    { name: "UI Elements", icon: "📑" },
    { name: "Team", icon: "📑" },
    { name: "Table", icon: "📑" },
  ];

  return (
    <aside className="row-span-2 flex flex-col gap-2 overflow-y-auto">
      <div
        id="logo"
        className="h-[10vh] w-32 self-center text-2xl place-content-center font-bold"
      >
        <span className="text-primary">Dash</span>
        <span className="text-black">Stack</span>
      </div>
      <section className="h-[90vh]">
        <ul className="space-y-2 flex flex-col h-[30vh]">
          {menu.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`relative flex gap-6 w-full h-full`}
            >
              {/* Left primary strip (visible only when active) */}
              <span
                className={`w-2 rounded-r ${
                  activeItem === item.name ? "bg-[#407BFF]!" : "bg-transparent"
                }`}
              ></span>

              <div
                className={`flex justify-center gap-5 items-center-safe rounded-lg w-[75%] 
                  ${
                    activeItem === item.name
                      ? "bg-[#407BFF]! text-white"
                      : "bg-transparent"
                  }
                  `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="space-y-2 flex flex-col h-[40vh]">
          {pageMenu.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`relative flex gap-6 w-full h-full`}
            >
              {/* Left primary strip (visible only when active) */}
              <span
                className={`w-2 rounded-r ${
                  activeItem === item.name ? "bg-[#407BFF]!" : "bg-transparent"
                }`}
              ></span>

              <div
                className={`flex justify-center gap-5 items-center-safe rounded-lg w-[75%] 
                  ${
                    activeItem === item.name
                      ? "bg-[#407BFF]! text-white"
                      : "bg-transparent"
                  }
                  `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <hr />
      </section>
    </aside>
  );
}

export default Sidebar;
