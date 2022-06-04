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
    <section className="flex flex-col space-y-2 w-full h-screen justify-end bg-gradient-to-b z-20">
      <Image
        src={`${baseurl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill"
        alt=""
        objectFit="cover"
      />

      <div className="flex flex-col justify-center pl-12 space-y-4 h-full">
        <h1 className="max-w-2xl text-white  font-bold text-5xl z-10 mt-10">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="max-w-xl  text-lg text-white z-10">{movie?.overview}</p>
        <div className="z-10 flex space-x-4 mt-4">
          <button className="py-1 px-4 flex items-center justify-between text-xl bg-white rounded-md">
            <BiPlay className="text-3xl" />
            Trailer
          </button>
          <button className="py-1 text-white px-4 flex items-center justify-between text-xl bg-button rounded-md">
            <BiInfoCircle className="text-3xl mr-2" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
