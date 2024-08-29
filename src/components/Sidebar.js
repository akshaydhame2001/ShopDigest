"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSidebarOpen(true)} className="md:hidden">
        <IoMenu className="text-3xl" />
      </button>
      <div
        className={`fixed inset-0 right-0 bg-gray-800 bg-opacity-75 z-40 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-white p-4 w-64 ml-auto">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="self-end p-2 text-gray-700"
          >
            <AiOutlineClose className="text-2xl" />
          </button>
          <nav className="mt-8">
            <a href="#" className="block py-2 text-gray-700 hover:text-primary">
              Features
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-primary">
              Marketplace
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-primary">
              Company
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-primary">
              Team
            </a>
            <a href="#" className="block py-2 text-gray-700 hover:text-primary">
              Contact
            </a>
            <button className="button-primary flex items-center py-2 px-4">
              Add post
              <FaLongArrowAltRight className="ml-2" />
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
