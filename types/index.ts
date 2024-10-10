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

// Main interface representing the movieDetail data structure
export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Interface representing the genre of the movie
interface Genre {
  id: number;
  name: string;
}

// Interface representing the production company of the movie
interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

// Interface representing the production country of the movie
interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

// Interface representing spoken languages in the movie
interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// Interface representing the collection the movie belongs to
interface Collection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
