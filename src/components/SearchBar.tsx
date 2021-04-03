/** @jsxImportSource @emotion/react */

import { jsx, css } from '@emotion/react';
import React from "react";

type SearchBarProps = {
  handleChange: (e: string) => void,
  content: string,
}

const SearchBar: React.FC<SearchBarProps> = ({ handleChange, content }) => {
  return (
    <div>
      <h2
      css={css`
        margin: 15px;
        font-family: 'Roboto', sans-serif;
      `}>
        Where to you want to visit?
      </h2>
      <form>
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            value={content}
            placeholder="Search locations..."
            onChange={(e) => handleChange(e.target.value)}
            css={css`
              width: 350px;
              height: 30px;
              margin: 10px;
              padding: 5ps;
              border-radius: 6px;
              ::placeholder {
                color: #888354;  
                padding: 5px;
              }
            `}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
