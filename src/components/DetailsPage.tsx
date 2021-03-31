import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
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
  //! when manually inputing a route with incorrect ID, throws error
  //TODO implement error handling for this case 
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
        <br/>
        {locationDetails.latitude}
        <br/>
        {locationDetails.longitude}
      </p>
      <Link to="/">HOME</Link>
    </div>
   );
}
 
export default withRouter(DetailsPage);