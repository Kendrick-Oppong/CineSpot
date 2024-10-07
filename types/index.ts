// Type definition for the movie result object
export interface MovieApiResponse {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Type definition for the entire API response
export interface MovieCategoryApiResponse {
  page: number;
  results: MovieApiResponse[];
  total_pages: number;
  total_results: number;
}
