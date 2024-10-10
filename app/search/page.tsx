import { SearchAndFilter } from "@/components/search";
import { getSearchMovies } from "@/lib/utils";

interface SearchMovieProps {
  searchParams: { q: string };
}

const SearchMoviePage = async ({ searchParams }: SearchMovieProps) => {
  const query = searchParams?.q ?? "";
  console.log(query);
  const { results } = await getSearchMovies({ query });

  // Checking if results is either false or has a length of 0
  const noResults = !results || results.length === 0;

  return (
    <section className="bg-muted">
      <div className="font-bold text-xl sm:text-2xl mb-4">
        {noResults ? (
          <h1>
            No results found for{" "}
            <span className="text-destructive">&quot;{query}&quot;</span>
          </h1>
        ) : (
          <h1>
            Found <span>{results.length}</span> matching results for{" "}
            <span className="text-destructive">&quot;{query}&quot;</span>
          </h1>
        )}
      </div>
      {/* Client-side component for filtering */}
      {!noResults && 
        <SearchAndFilter initialMovies={results} />
    }
    </section>
  );
};

export default SearchMoviePage;
