/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getLocationDetails } from "../services/APIClient";
import { LocationDetails } from "../types";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapMarker from '../assets/map-marker.svg';

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

  const mapIcon = L.icon({
    iconUrl: mapMarker,
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  
  function loadLocationDetails(locationID: string) {
    getLocationDetails(locationID)
      .then((fetchedDetails) => {
        setLocationDetails(fetchedDetails)});
  }

  useEffect(() => {
    loadLocationDetails(match.params.id);
  }, []);

  return (
    <div 
    css={css`
      margin: 1vw;
      padding: 2vw;
      width: 800px;
      display: flex;
      justify-content: space-between;
      background-color: #dbd2c5;
    `}>
      <div>
        <h3>Location:</h3>
        <h2>{locationDetails.name}</h2>
        Latitude: {locationDetails.latitude} <br /> 
        Longitude: {locationDetails.longitude}
      </div>
      {
        locationDetails.latitude !== 0 && locationDetails.longitude !== 0 ?
        <MapContainer 
          css={css`
            width: 500px;
            height: 480px;
            margin: 10px;
            box-shadow: 2px 2px 4px #3a3728;
          `} 
          center={[locationDetails.latitude, locationDetails.longitude]} 
          zoom={8} 
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[locationDetails.latitude, locationDetails.longitude]} icon={mapIcon}>
            <Popup>
              {locationDetails.name}
              <br /> Latitude: {locationDetails.latitude}
              <br /> Longitude: {locationDetails.longitude}
            </Popup>
          </Marker>
        </MapContainer> :
        null  
      }
    </div>
  );
};

export default withRouter(DetailsPage);
