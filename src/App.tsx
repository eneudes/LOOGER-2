import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import data from './data/data.json';
import { Item } from "./types/data";


export function App() {
  const [, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Item[]>([]);

  useEffect(() => {
    setSearchResults(data as Item[])
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filteredResults = (data as Item[]).filter((item) => Object.values(item).some((value) => String(value).toLowerCase().includes(term.toLowerCase())));
    setSearchResults(filteredResults)
  }
  return (
    <div className=" max-md:w-full w-full flex-col items-center justify-center px-10 max-md:px-2 ">
      <div className="max-md:flex-col max-md:gap-5 max-md:justify-center max-md:items-center max-md:w-full m-auto w-5xl flex py-12 items-center">
        <h1 className="pr-16 text-3xl">LOOGER</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <SearchResults results={searchResults} />
    </div>
  )
}
