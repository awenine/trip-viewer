/** @jsxImportSource @emotion/react */

import { jsx, css } from '@emotion/react';
import * as React from 'react';
import { Link } from "react-router-dom";

export interface LocationCardProps {
  locationName: string,
  locationId: number,
}
 
const LocationCard: React.FC<LocationCardProps> = ({ locationName, locationId }) => {
  return ( 
    <Link 
      to={`/locations/${locationId}`}
      css={css`
        &:link, &:hover, &:visited, &:active {
          text-decoration: none;
        }
      `}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          width: 200px;
          height: 200px;
          padding: 20px;
          margin: 10px;
          border-radius: 4px;
          background-color: #c3eed8;
          color: #2c9163;
          font-family: 'Roboto', sans-serif;
          font-size: 14px;
          transition: box-shadow 500ms, background-color 500ms, span 500ms;
          &:hover {
            background-color: #e9ffd0;
            box-shadow: 2px 2px 4px #225522;
            span {
              color: #008d07;
              background-color#9add8dbb;
            }
          }
        `}>
        <div 
          id="image"
          css={css`
            width: 160px;
            height: 100px;
            padding: 10px;
            margin-top: 5px;
            background-color: #b5f1fe;
            text-decoration: none;
            color: #a7a9b8;
            border: 2px solid #95c0dd;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>Location Image</div>
        <h3>{locationName}</h3>
        <span
          css={css`
            color: #c3eed8;
            background-color: #c3eed8;
            border-radius: 2px;
            padding: 4px 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}>
          Find out more
        </span>
      </div>
    </Link>
   );
}
 
export default LocationCard;
