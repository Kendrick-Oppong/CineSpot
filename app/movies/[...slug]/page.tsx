import { getMovieDetail } from "@/lib/utils";
import { imagePath } from "@/constants";
import Image from "next/image";

interface MovieIdParams {
  params: { slug: string[] };
}

const MovieDetail = async ({ params }: MovieIdParams) => {
  const [, id] = params.slug;
  const movie = await getMovieDetail({ movie_id: id });
  console.log(movie);

  return (
    <div className="p-5 sm:p-5 bg-muted">
      <section className="p-0 sm:grid sm:grid-cols-2   lg:grid-cols-3 gap-6">
        {/* Movie Poster */}
        <div className="relative">
          <Image
            src={`${imagePath}${movie.poster_path}`}
            width={300}
            height={300}
            alt={`${movie.title} poster`}
            priority
            className="rounded-lg w-full h-auto sm:h-full sm:object-cover xl:h-auto lg:object-normal"
          />
        </div>

        {/* Movie Details */}
        <div className="mt-8 md:mt-0 space-y-4 lg:col-span-2">
          {/* Movie Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">
            {movie.title}
          </h1>

          {/* Tagline */}
          {movie.tagline && <p className="italic text-lg">{movie.tagline}</p>}

          {/* Original Title */}
          <p>
            <strong>Original Title:</strong> {movie.original_title}
          </p>

          {/* Release Date, Runtime, and Budget */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div>
              <p>
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p>
                <strong>Runtime:</strong> {movie.runtime} minutes
              </p>
            </div>
            <div>
              <p>
                <strong>Budget:</strong> ${movie.budget.toLocaleString()}
              </p>
              <p>
                <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Genres */}
          <div>
            <strong>Genres:</strong>{" "}
            {movie.genres
              .map((genre: { id: number; name: string }) => genre.name)
              .join(", ")}
          </div>

          {/* Overview */}
          <div>
            <p>
              <strong>Overview:</strong> {movie.overview}
            </p>
          </div>

          {/* Spoken Languages */}
          <div>
            <strong>Languages:</strong>{" "}
            {movie.spoken_languages
              .map((lang: { english_name: string }) => lang.english_name)
              .join(", ")}
          </div>

          {/* Production Companies */}
          <div>
            <strong>Production Companies:</strong>{" "}
            {movie.production_companies
              .map((company: { name: string }) => company.name)
              .join(", ")}
          </div>

          {/* Production Countries */}
          <div>
            <strong>Production Countries:</strong>{" "}
            {movie.production_countries
              .map((country: { name: string }) => country.name)
              .join(", ")}
          </div>

          {/* Vote Average & Popularity */}
          <div className="sm:flex sm:space-x-4">
            <p>
              <strong>Vote Average:</strong> {movie.vote_average.toFixed(1)}
            </p>
            <p>
              <strong>Vote Count:</strong> {movie.vote_count.toLocaleString()}
            </p>
            <p>
              <strong>Popularity:</strong> {movie.popularity.toFixed(1)}
            </p>
          </div>

          {/* IMDb Link */}
          <div>
            <strong>IMDb:</strong>{" "}
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-destructive"
            >
              {movie.imdb_id}
            </a>
          </div>

          {/* Belongs to Collection */}
          {movie.belongs_to_collection && (
            <div>
              <strong>Collection:</strong> {movie.belongs_to_collection.name}
            </div>
          )}

         
           
            <div>
              <strong>Status:</strong> {movie.status}
            </div>
         
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
