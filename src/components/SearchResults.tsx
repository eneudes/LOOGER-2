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
          <div key={item.id} className="max-md:w-full m-auto w-5xl bg-zinc-800 border border-zinc-700 rounded-sm my-1 flex-col p-1 items-center justify-center">
            <h1 className='max-md:w-full bg-zinc-900 w-56 flex justify-center'>{item.servidor}</h1>
            <div><p className='text-zinc-500 font-normal max-md:text-[9px] max-md:break-words'> <span className=' max-md:text-[9px] text-zinc-100'>PASTA : </span>{item.pasta}</p></div>
            <div><p className='text-sky-500 font-normal  max-md:text-[9px]'><span className='max-md:text-[9px] text-zinc-100'>PALAVRA CHAVE : </span>{item.descricao}</p></div>
            <div className='w-full bg-zinc-900 p-1'><p className='text-zinc-300 font-normal text-[10px] max-md:text-[5px] max-md:box-border'>{item.local}</p></div>
          </div>
        ))}
      </>
    )
  }
}
