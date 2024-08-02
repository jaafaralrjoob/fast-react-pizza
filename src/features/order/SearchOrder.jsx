import { useState } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search order #"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm outline-none outline-offset-2 transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500/50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
