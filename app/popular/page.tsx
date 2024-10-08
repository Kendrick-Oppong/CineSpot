import { Card } from "@/components/card";
import { getMoviesByCategory } from "@/lib/utils";
import React from "react";

const PopularMoviesPage = async () => {
  const { results: popularMovies } = await getMoviesByCategory({
    category: "popular",
  });

  return (
    <>
      <section className="bg-muted">
        <div className="font-bold text-2xl mb-4">
          <h1>
            Popular <span>Movies</span>
          </h1>
        </div>
        <div className="grid grid-cols-auto lg:grid-cols-auto-lg gap-4">
          {popularMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularMoviesPage;
