import { useState, FormEvent } from 'react';

interface SearchbBarProps {
  onSearch: (term: string) => void;
}

export function SearchBar({onSearch}: SearchbBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Buscar ...' value={searchTerm} onChange={handleChange} />
      <button type='submit'>Buscar</button>
    </form>
  )
}