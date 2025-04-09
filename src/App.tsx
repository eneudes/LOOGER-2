import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import data from './data/data.json';
import { Item } from "./types/data";


export function App() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Item[]>([]);

    useEffect(() =>{
      setSearchResults(data as Item[])
    }, []);

    const handleSearch = (term: string) =>{
      setSearchTerm(term);
      const filteredResults = (data as Item[]).filter((item) => Object.values(item).some((value) => String(value).toLowerCase().includes(term.toLowerCase())));
      setSearchResults(filteredResults)
    }
  return (
<div>
  <h1>projeto buscar</h1>
  <SearchBar onSearch={handleSearch}/>
    <h2>resultado da busca</h2>
    <SearchResults results={searchResults}/>
</div>
  )
}
