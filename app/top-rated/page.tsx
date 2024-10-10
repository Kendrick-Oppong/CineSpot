
import { SearchAndFilter } from "@/components/search";
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
            Top Rated <span>Movies</span>
          </h1>
        </div>
        {/* Client-side component for filtering */}
        <SearchAndFilter initialMovies={topRatedMovies} />
      </section>
    </>
  );
};

export default TopRatedMoviesPage;
