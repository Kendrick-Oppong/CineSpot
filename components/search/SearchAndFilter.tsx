"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MovieApiResponse } from "@/types";
import { Card } from "../card";
import { useState } from "react";

const SearchAndFilter = ({
  initialMovies,
}: {
  initialMovies: MovieApiResponse[];
}) => {
  const [title, setTitle] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); // Number of movies visible

  // Filter movies based on the title entered by the user
  const filteredMovies = initialMovies.filter((movie) =>
    movie.title.toLowerCase().includes(title.trim().toLowerCase())
  );

  // Slice movies based on visible count
  const visibleMovies = filteredMovies.slice(0, visibleCount);

  // Function to load more movies
  const loadMoreMovies = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Load 10 more movies
  };

  return (
    <>
      {/* Input for filtering by title */}
      <div className="my-4">
        <Input
          type="text"
          placeholder="Filter by movie title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border-primary rounded w-full"
        />
      </div>

      {/* Display filtered movies */}
      <div className="grid grid-cols-auto lg:grid-cols-auto-lg gap-4">
        {visibleMovies.length > 0 ? (
          visibleMovies.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p className="text-destructive">No movies found</p>
        )}
      </div>

      {/* Load More button */}
      {visibleMovies.length < filteredMovies.length && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={loadMoreMovies}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchAndFilter;
