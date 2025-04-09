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
      <div>
        {results.map((item) => (
          <div key={item.id}>
            <h1>{item.servidor}</h1>
            <p>{item.pasta}</p>
            <p>{item.descricao}</p>
            <strong>{item.local}</strong>
          </div>
        ))}
      </div>
    )
  }
}
