// import "./DetailsPage.css";
import { useState, useEffect } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { getLocationDetails } from "../services/APIClient";
import { LocationDetails } from "../types";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type DetailsPageParams = {
  id: string;
};
type DetailsPageProps = RouteComponentProps<DetailsPageParams>;

const DetailsPage = ({ match }: DetailsPageProps) => {
  const [locationDetails, setLocationDetails] = useState<LocationDetails>({
    name: "Loading...",
    id: 0,
    latitude: 0,
    longitude: 0,
  });
  //! when manually inputing a route with incorrect ID, throws error
  //TODO implement error handling for this case
  function loadLocationDetails(locationID: string) {
    getLocationDetails(locationID)
      .then((fetchedDetails) => {
        setLocationDetails(fetchedDetails)});
  }

  useEffect(() => {
    loadLocationDetails(match.params.id);
  }, []);

  return (
    <div>
      <p>Details: ID = {match.params.id}</p>
      <p>
        {locationDetails.name}
        <br />
        {locationDetails.latitude}
        <br />
        {locationDetails.longitude}
      </p>
      {
        locationDetails.latitude !== 0 && locationDetails.longitude !== 0 ?
        <MapContainer style={{height: "480px", width: "500px"}} center={[locationDetails.latitude, locationDetails.longitude]} zoom={8} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[locationDetails.latitude, locationDetails.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> :
        null  
      }
      <Link to="/">HOME</Link>
    </div>
  );
};

export default withRouter(DetailsPage);
