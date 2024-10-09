"use client";
import { Input } from "@/components/ui/input";
import { MovieApiResponse } from "@/types";
import { Card } from "../card";
import { useState } from "react";

const SearchAndFilter = ({
  initialMovies,
}: {
  initialMovies: MovieApiResponse[];
}) => {
  const [title, setTitle] = useState("");

  // Filter movies based on the title entered by the user
  const filteredMovies = initialMovies.filter((movie) =>
    movie.title.toLowerCase().includes(title.trim().toLowerCase())
  );

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
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <p className="text-destructive">No movies found</p>
        )}
      </div>
    </>
  );
};

export default SearchAndFilter;
