import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getLocationDetails } from "../services/APIClient";
import { LocationDetails } from "../types"

type DetailsPageParams = {
  id: string  
}
type DetailsPageProps = RouteComponentProps<DetailsPageParams>
 
const DetailsPage = ({ match }: DetailsPageProps) => {
  const [locationDetails, setLocationDetails] = useState<LocationDetails> ({
    name: 'Loading...',
    id: 0,
    latitude: 0,
    longitude: 0,
  });

  function loadLocationDetails(locationID: string) {
    getLocationDetails(locationID)
      .then((fetchedDetails) => {
        setLocationDetails(fetchedDetails);
      });
  }

  useEffect(() => {
    loadLocationDetails(match.params.id)
  }, []);

  return ( 
    <div>
      <p>
        Details: ID = {match.params.id}
      </p>
      <p>
        {locationDetails.name}
      </p>
    </div>
   );
}
 
export default withRouter(DetailsPage);