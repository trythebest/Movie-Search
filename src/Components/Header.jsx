import { useState } from 'react';

const Header = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setSearchQuery(query);
  };

  return (
    <header className=" flex flex-col justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">Movie Explorer</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search movies..."
          className="p-2 bg-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="p-2 bg-red-600 ml-2" onClick={handleSearch}>
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;