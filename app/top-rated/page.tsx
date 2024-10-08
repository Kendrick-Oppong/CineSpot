import { Card } from "@/components/card";
import { getMoviesByCategory } from "@/lib/utils";


const TopRatedMoviesPage = async () => {
  const { results: topRatedMovies } = await getMoviesByCategory({
    category: "top_rated",
  });

  return (
    <>
      <section className="bg-muted">
        <div className="font-bold text-2xl mb-4">
          <h1>
            TopRated <span>Movies</span>
          </h1>
        </div>
        <div className="grid grid-cols-auto lg:grid-cols-auto-lg gap-4">
          {topRatedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TopRatedMoviesPage;
