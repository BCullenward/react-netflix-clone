import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaItem from "./MediaItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MediaRow = ({ rowId, rowTitle, rowUrl }) => {
  //const rowId = Math.floor(Math.random() * 1000);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(rowUrl).then((response) => setMovies(response.data.results));
  }, [rowUrl]);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + { rowId });
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <>
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{rowTitle}</h2>
      {
        <div className="relative flex items-center group">
          <MdChevronLeft
            onClick={() => slide(-500)}
            className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
            size={40}
          />
          {/* FIXME slider only slides first row and row id is not being passed */}
          <div
            id={`slider` + { rowId }}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {movies.map((movie) => (
              <MediaItem key={movie.id} movie={movie} />
            ))}
          </div>
          <MdChevronRight
            onClick={() => slide(500)}
            className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
            size={40}
          />
        </div>
      }
    </>
  );
};

export default MediaRow;
