import { SearchAndFilter } from "@/components/search";
import { getMoviesByCategory } from "@/lib/utils";

const NowPlayingMoviesPage = async () => {
  const { results: nowPlayingMovies } = await getMoviesByCategory({
    category: "now_playing",
  });
  return (
    <>
      <section className="bg-muted">
        <div className="font-bold text-2xl mb-4">
          <h1>
            Now Playing <span>Movies</span>
          </h1>
        </div>
        {/* Client-side component for filtering */}
        <SearchAndFilter initialMovies={nowPlayingMovies} />
      </section>
    </>
  );
};

export default NowPlayingMoviesPage;
