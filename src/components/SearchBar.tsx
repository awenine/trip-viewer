import React from "react";

type SearchBarProps = {
  handleChange: (e: string) => void,
  content: string,
}

const SearchBar: React.FC<SearchBarProps> = ({ handleChange, content }) => {
  return (
    <div>
      <h2>Search by Text:</h2>
      <form>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={content}
            placeholder="Search locations..."
            onChange={(e) => handleChange(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
