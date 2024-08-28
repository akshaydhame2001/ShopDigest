import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiLineVerticalThin } from "react-icons/pi";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xl font-bold text-primary">ShopDigest</div>
          <PiLineVerticalThin className="ml-1" />
          <a
            href="#"
            className="text-gray-700 hover:text-primary flex items-center"
          >
            Shopify <IoMdArrowDropdown className="ml-1" />
          </a>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="text-gray-700 hover:text-primary">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Marketplace
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-primary flex items-center"
          >
            Company <IoIosArrowDown className="ml-2" />
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Team
          </a>
          <a href="#" className="text-gray-700 hover:text-primary">
            Contact
          </a>
        </div>

        <div className="flex space-x-2">
          <button className="button-secondary">Login</button>
          <button className="button-primary hidden md:flex items-center py-2 px-4">
            Add post
            <FaLongArrowAltRight className="ml-2" />
          </button>
        </div>
        <div className="flex space-x-2 md:hidden">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}
