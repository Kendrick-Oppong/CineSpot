import { MovieCategoryApiResponse } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

const MovieCard = ({ movies }: { movies: MovieCategoryApiResponse }) => {
  const slicedMovies = movies.results.slice(0, 5);
  const imagePath = "https://image.tmdb.org/t/p/original";

  return slicedMovies?.map((movie) => (
    <div key={movie.id} className="shadow-lg">
      <Image
        src={`${imagePath}${movie.poster_path}`}
        width={300}
        height={300}
        alt=""
        priority
        className="rounded-lg w-full"
      />
      <div className="px-2 my-3">
        <h1 className="text-primary text-xl font-semibold ">{movie.title}</h1>
        <div className="flex items-center justify-between my-2">
          <p>{movie.release_date}</p>
          <p className="flex gap-1 items-center">
            <Star className="text-yellow-400"/> {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  ));
};

export default MovieCard;
