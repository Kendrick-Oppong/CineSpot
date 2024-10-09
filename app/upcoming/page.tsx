
import { SearchAndFilter } from "@/components/search";
import { getMoviesByCategory } from "@/lib/utils";


const UpcomingMoviesPage = async () => {
  const { results: upcomingMovies } = await getMoviesByCategory({
    category: "upcoming",
  });

  return (
    <>
      <section className="bg-muted">
        <div className="font-bold text-2xl mb-4">
          <h1>
            Upcoming <span>Movies</span>
          </h1>
        </div>
        {/* Client-side component for filtering */}
        <SearchAndFilter initialMovies={upcomingMovies} />
      </section>
    </>
  );
};

export default UpcomingMoviesPage;
