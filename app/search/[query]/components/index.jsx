"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchResult({ query, results }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/details/${id}`);
  };

  return (
    <div className="bg-gray-900 p-4 max-w-screen-lg mx-auto w-[400px] text-white min-h-screen">
      <div className="flex items-center justify-center">
        <Image src={"/movie.png"} width={100} height={100} />
      </div>
      <h2 className="text-xl  mb-3 bg-yellow-500 rounded-xl px-4 py-2">
        Search Results for {query}:
      </h2>

      <div className="">
        <ul className="flex items-center flex-wrap justify-center gap-5 ">
          {results.map((result, i) => (
            <li
              key={result.id}
              onClick={() => handleClick(result.id)}
              className="flex items-center flex-col w-42  text-gray-900 mb-4 focus:outline-none cursor-pointer"
            >
              <div className="flex flex-col items-center bg-white  w-42 gap-2 border-2 border-lime-600 shadow-md shadow-orange-200">
                {result.image && (
                  <img
                    src={result.image}
                    width={160}
                    height={100}
                    alt={result.title}
                    className="mr-2 w-42 h-40 "
                  />
                )}

                <p className="text-lg font-semibold mb-2">{result.title}</p>
                <div className="flex gap-4">
                  <p className="text-lg font-semibold mb-2 uppercase">
                    {result.type}
                  </p>
                  <p className="text-lg font-semibold mb-2">{result.year}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
