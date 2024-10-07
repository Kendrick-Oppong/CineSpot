import { MovieCard } from "@/components/card";
import { HeroSection } from "@/components/hero";
import { getMoviesByCategory } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const popular = getMoviesByCategory({ category: "popular" });
  const top_rated = getMoviesByCategory({ category: "top_rated" });
  const upcoming = getMoviesByCategory({ category: "upcoming" });
  const now_playing = getMoviesByCategory({ category: "now_playing" });


  const [popularMovies, topRatedMovies, upcomingMovies, nowPlayingMovies] =
    await Promise.all([popular, top_rated, upcoming, now_playing]);

  return (
    <>
      <HeroSection />

      {/* popularMovies */}
      <section className="bg-secondary">
        <div className="flex justify-between items-center py-6">
          <div className="font-bold text-2xl">
            <h1>
              Popular <span>Movies</span>
            </h1>
          </div>
          <div>
            <Button className="bg-primary" size="lg">
              <Link href="/popular">View All</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-auto gap-4">
          <MovieCard movies={popularMovies} />
        </div>
      </section>

      {/* Now Playing */}
      <section className="bg-muted">
        <div className="flex justify-between items-center py-6">
          <div className="font-bold text-2xl">
            <h1>
              Now <span>Playing</span>
            </h1>
          </div>
          <div>
            <Button className="bg-primary" size="lg">
              <Link href="/now-playing">View All</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-auto gap-4">
          <MovieCard movies={nowPlayingMovies} />
        </div>
      </section>

      {/* Top Rated */}
      <section className="bg-secondary">
        <div className="flex justify-between items-center py-6">
          <div className="font-bold text-2xl">
            <h1>
              Top <span>Rated</span>
            </h1>
          </div>
          <div>
            <Button className="bg-primary" size="lg">
              <Link href="/top-rated">View All</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-auto gap-4">
          <MovieCard movies={topRatedMovies} />
        </div>
      </section>

       {/* Upcoming */}
        <section className="bg-muted">
        <div className="flex justify-between items-center py-6">
          <div className="font-bold text-2xl">
            <h1>
              Upcoming <span>Movies</span>
            </h1>
          </div>
          <div>
            <Button className="bg-primary" size="lg">
              <Link href="/upcomimg">View All</Link>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-auto gap-4">
          <MovieCard movies={upcomingMovies} />
        </div>
      </section>
    </>
  );
};

export default Home;
