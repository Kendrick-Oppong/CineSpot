import { Card } from "@/components/card";
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
        <div className="grid grid-cols-auto lg:grid-cols-auto-lg gap-4">
          {nowPlayingMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default NowPlayingMoviesPage;
