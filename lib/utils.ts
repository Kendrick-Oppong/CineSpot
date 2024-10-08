import { MovieCategoryApiResponse, MovieDetail } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_KEY = process.env.MOVIE_DB_KEY;

export async function getMoviesByCategory({
  category,
}: {
  category: string;
}): Promise<MovieCategoryApiResponse> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getMovieDetail({
  movie_id,
}: {
  movie_id: string;
}): Promise<MovieDetail> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getSearchMovies({
  query,
}: {
  query: string;
}): Promise<MovieCategoryApiResponse> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log({ error: "Failed to fetch data" });
  }

  return res.json();
}
