interface SearchMovieProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SearchMoviePage = ({ searchParams }: SearchMovieProps) => {
  console.log("searchParams", searchParams);
  return <div>SearchMoviePage</div>;
};

export default SearchMoviePage;
