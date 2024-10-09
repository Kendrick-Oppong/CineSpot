import { SearchAndFilter } from "@/components/search";
import { getMoviesByCategory } from "@/lib/utils";

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
        {/* Client-side component for filtering */}
        <SearchAndFilter initialMovies={popularMovies} />
      </section>
    </>
  );
};

export default PopularMoviesPage;
