import React from "react";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";

function MainLayout({ children }) {
  return (
    <section className="grid h-screen grid-cols-[250px_1fr] grid-rows-[64px_1fr]">
      <Sidebar />
      <Navbar />
      <main className="overflow-y-auto p-6 bg-yellow-500">{children}</main>
    </section>
  );
}

export default MainLayout;
