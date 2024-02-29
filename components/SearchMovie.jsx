"use client";

import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { BiMoviePlay } from "react-icons/bi";
import { PiPopcornBold } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { useState } from "react";

import { useRouter } from "next/navigation";

export default function SearchMovie() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <div className="bg-gray-900 p-4 max-w-screen-lg mx-auto min-h-screen w-[400px]">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image src={"/movie.png"} width={100} height={100} />
        </div>
        <div className="flex items-center">
          <input
            className="flex-1 rounded-l-lg px-4 py-2 bg-white w-[320px] text-gray-800 placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Search movies"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-white rounded-r-lg px-4 py-3 "
            onClick={() => {
              router.push(`search/${query}`);
            }}
          >
            <IoIosSearch />
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-32 text-white">
        <BiMoviePlay size={80} />
        <IoFastFoodOutline size={80} />
        <PiPopcornBold size={80} />
      </div>
    </div>
  );
}
