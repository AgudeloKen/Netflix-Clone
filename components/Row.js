import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef, useState } from "react";
import Thumbnail from "./Thumbnail";

const Row = ({ title, movies }) => {
  const rowRef = useRef();
  const [isMove, setIsMove] = useState(false);
  const handleClick = (dir) => {
    setIsMove(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="h-40 space-y-2 mt-2 pl-8">
      <h2 className="font-bold text-white text-2xl">{title}</h2>
      <div className="group relative flex items-center">
        <AiOutlineLeft
          className="absolute left-2 text-4xl text-white opacity-0 hover:scale-125 cursor-pointer transition-all ease-in duration-500 group-hover:opacity-100 group-hover:bg-bop z-10"
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="flex h-40 items-center space-x-2 overflow-x-scroll oveflow-y-hidden scrollbar-hide"
        >
          {movies?.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <AiOutlineRight
          className="absolute right-2  text-4xl text-white opacity-0 hover:scale-125 cursor-pointer transition-all ease-in duration-500 group-hover:opacity-100 group-hover:bg-bop z-10"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;
