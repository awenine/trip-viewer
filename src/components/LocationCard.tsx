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
    <Link to={`/locations/${locationId}`}>
      <div
        css={css`
          width: 200px;
          height: 200px;
          padding: 10px;
          margin: 5px;
          background-color: #bce9b3;
          color: #1b8565;
          font-size: 14px;
          &:hover {
            color: ${'red'};
            background-color: #93be8a;
          }
        `}>
        <div 
          id="image"
          css={css`
            width: 160px;
            height: 100px;
            padding: 10px;
            margin-top: 5px;
            background-color: #7fd0e9;
            color: #2b3270;
            font-size: 14px;
            text-align: center;
          `}>Location Image</div>
        <h3>{locationName}</h3>
      </div>
    </Link>
   );
}
 
export default LocationCard;
