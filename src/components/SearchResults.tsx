import { FunctionComponent, useEffect, useState } from "react";
import { AppRoute } from "./routes";

type SearchResultsProps = {
  searchQuery?: string;
};

type SearchResult = {
  appRoute: AppRoute;
  results: string[];
};

const calculateSearchResults = (query: string): SearchResult[] | undefined => {
  return undefined;
};

const SearchResults: FunctionComponent<SearchResultsProps> = ({
  searchQuery,
}) => {
  const [searchResults, setSearchResults] = useState<
    SearchResult[] | undefined
  >(undefined);

  useEffect(() => {
    setSearchResults(calculateSearchResults("hello world"));
  }, [searchQuery]);

  if (!searchQuery) {
    return <h1>No matches (empty query).</h1>;
  }
  return <h1>SearchResults for query {searchQuery}</h1>;
};

export default SearchResults;
