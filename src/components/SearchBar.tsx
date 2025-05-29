import { useState, FormEvent } from 'react';
import iconSearch from '../assets/search.svg';
interface SearchbBarProps {
  onSearch: (term: string) => void;
}

export function SearchBar({ onSearch }: SearchbBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onChange={handleSubmit} className='flex '>
      <input
        className='max-md:w-64 w-[640px] h-10 rounded-4xl rounded-br-none rounded-tr-none border border-zinc-700 px-3 focus:border-sky-500 focus:outline focus:bg-zinc-800'
        type="text"
        placeholder='Buscar...'
        value={searchTerm}
        onChange={handleChange}
      />
      <button type='submit' className='h-10 w-16 border bg-zinc-800 border-zinc-700 rounded-4xl rounded-bl-none rounded-tl-none cursor-pointer focus:outline-none flex items-center justify-center'>
        <img src={iconSearch} alt="lupa" />
      </button>
    </form>
  )
}