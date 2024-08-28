import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function Card({ title, description, apps, icons }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm h-[300px] flex flex-col border-2">
      <div className="flex-grow">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div>
        <Image
          src={icons}
          alt="Icon"
          className="w-auto h-auto"
          width={100}
          height={50}
        />
      </div>
      <hr className="border-gray-300 mt-4 mb-4" />
      <div className="flex items-center justify-between">
        <span className="text-green-400 font-semibold">{apps} Apps</span>
        <button className="bg-black text-white text-sm py-1 px-3 rounded-full flex items-center">
          Explore more
          <IoArrowForward className="ml-2" />
        </button>
      </div>
    </div>
  );
}
