import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 sm:hover:scale-105 transition transform duration-200 ease-in
          hover:z-50"
    >
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={1920}
        height={1080}
        layout="responsive"
      ></Image>
      <div className="p-2">
        <p className="truncate max-w-sm">{result.overview}</p>
        <h2
          className="my-2 text-2xl text-white transition-all 
        duration-100 ease-in-out group-hover:font-bold"
        >
          {result.original_title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 ">
          {/* {console.log(result.media_type)} */}
          {result.media_type && `${result.media_type} •`}{" "}
          {result.first_air_date}
          {result.release_date || result.first_air_date} •
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
