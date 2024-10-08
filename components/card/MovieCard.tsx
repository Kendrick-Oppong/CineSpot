import { MovieCategoryApiResponse } from "@/types";
import {Card} from "."

const MovieCard = ({ movies }: { movies: MovieCategoryApiResponse }) => {
  const slicedMovies = movies.results.slice(0, 5);
 

  return slicedMovies?.map((movie) => (
   <Card key={movie.id} movie={movie}/>
  ));
};

export default MovieCard;
