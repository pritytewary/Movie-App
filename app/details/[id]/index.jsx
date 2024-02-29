"use client";
import Image from "next/image";

export default function MovieDetails({ movie }) {
  console.log(movie);

  return (
    <div className="bg-gray-900 p-4 max-w-screen-lg mx-auto text-white min-h-screen w-[400px]">
      <div className="flex items-center justify-center">
        <Image src={"/movie.png"} width={100} height={100} />
      </div>
      <div className="flex  flex-col items-center text-white focus:outline-none">
        <div className=" ">
          {movie.image && (
            <img
              src={movie.image}
              width={200}
              height={250}
              alt={movie.title}
              className="mr-2 flex items-center mt-2 border-2 border-rose-200 shadow-2xl shadow-orange-600"
            />
          )}{" "}
        </div>
        <h2 className="text-xl font-semibold my-2 text-center">
          {movie.title}
        </h2>
        <p className="text-lg font-semibold mb-2  ">
          🎇 {movie.rating ? movie.rating.star : "N/A"}
        </p>
        <p className="text-sm mb-2 mt-1 font-playfair  font-extralight">
          {movie.plot}
        </p>

        <p className="text-xl font-dancing mb-2">
          {" "}
          <span className="text-yellow-300  font-comfort ">Runtime:</span>{" "}
          {movie.runtime}
        </p>

        <p className="text-xl font-dancing  mb-2 flex  ">
          <span className="text-yellow-300 font-comfort ">Release Date:</span>{" "}
          {movie.releaseDetailed
            ? new Date(movie.releaseDetailed.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) +
              ", " +
              new Date(movie.releaseDetailed.date).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "N/A"}
        </p>
      </div>
    </div>
  );
}
