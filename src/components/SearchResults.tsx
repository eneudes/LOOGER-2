import { Item } from '../types/data';

interface SearchResultsProps {
  results: Item[];
}
export function SearchResults({ results }: SearchResultsProps) {
  if (!results || results.length === 0) {
    return <p>nenhum resultado encontrado!</p>
  }
  else {
    return (
      <>
        {results.map((item) => (
          <div key={item.id} className="max-md:w-full m-auto w-5xl bg-zinc-800 border border-zinc-700 rounded-sm my-1 flex-col gap-12 p-5">
            <h1 className='max-md:w-full bg-zinc-900 w-56 flex justify-center'>{item.servidor}</h1>
            <div><span className='max-md:w-full text-zinc-100'>PASTA :</span><span className='text-zinc-500 font-bold max-md:text-[5px]'> {item.pasta}</span></div>
            <div><span className='text-zinc-100'>PALAVRA CHAVE : </span><span className='text-sky-500 font-normal text-sm'>{item.descricao}</span></div>
            <div className='w-full bg-zinc-900 p-1'><span className='text-zinc-300 font-normal text-[10px] max-md:text-[5px]'>{item.local}</span></div>
          </div>
        ))}
      </>
    )
  }
}
