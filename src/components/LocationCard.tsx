import * as React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export interface LocationCardProps {
  locationName: string,
  locationId: number,
}
 
const LocationCard: React.FC<LocationCardProps> = ({ locationName, locationId }) => {
  return ( 
    <Link to={`/locations/${locationId}`}>
      <div className="LocationCard">
        <div id="image">Location Image</div>
        <h3>{locationName}</h3>
      </div>
    </Link>
   );
}
 
export default LocationCard;
