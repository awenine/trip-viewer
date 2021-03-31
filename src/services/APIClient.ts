import { Location, LocationDetails } from "../types"

const BASE_URL = process.env.REACT_APP_FETCH_URL;

export const getLocations = (searchTerm: string): Promise<Location[]> => {
  return fetch(`${BASE_URL}?q=${searchTerm}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching location`);
    });
};

export const getLocationDetails = (locationID: string): Promise<LocationDetails> => {
  return fetch(`${BASE_URL}/${locationID}`)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching location with id ${locationID}`);
    });
};
