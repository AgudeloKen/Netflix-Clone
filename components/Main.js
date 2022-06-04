import Image from "next/image";
import { useEffect, useState } from "react";
import { BiInfoCircle, BiPlay } from "react-icons/bi";

const Main = ({ movies }) => {
  const [movie, setMovie] = useState(null);
  const baseurl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);
  return (
    <section className="flex flex-col space-y-2 w-full h-banner justify-end ">
      <Image
        src={`${baseurl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
        alt=""
        objectFit="cover"
      />
      <div className="relative flex flex-col justify-center  md:pl-12 space-y-4 h-full">
        <h1 className="text-center md:text-left max-w-lg md:max-w-2xl text-white font-bold text-5xl md:text-3xl mt-24 md:mt-10">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="hidden md:flex max-w-xl  text-lg text-white z-10">
          {movie?.overview}
        </p>
        <div className="hidden md:flex z-10 space-x-4 mt-4">
          <button className="py-1 px-4 flex items-center justify-between text-xl bg-white rounded-md hover:opacity-80 transition-all ease duration-500">
            <BiPlay className="text-3xl" />
            Trailer
          </button>
          <button className="py-1 text-white px-4 flex items-center justify-between text-xl bg-button rounded-md hover:opacity-80 transition-all ease duration-500">
            <BiInfoCircle className="text-3xl mr-2" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
