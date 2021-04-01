import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLocations } from "../services/APIClient";
import { Location } from "../types"
import SearchBar from './SearchBar';
import { throttle } from "throttle-debounce";
import LocationCard from "./LocationCard";

// export interface SearchPageProps {
  
// }
 
const SearchPage = () => {
  const [locations, setLocations] = useState<Location[]> ([]);
  const [searchTerm, setSearchTerm] = useState("");

  function loadLocations(searchTerm: string) {
    getLocations(searchTerm)
      .then((fetchedLocations) => {
        setLocations(fetchedLocations);
      });
  }

  const throttledLoadLocations = useCallback(throttle(750, false, loadLocations),[])

  useEffect(() => {
    throttledLoadLocations(searchTerm)
  }, [searchTerm]);

  function handleSearchChange(text: string): void {
    setSearchTerm(text);
  }
  return ( 
    <div>
      <SearchBar handleChange={handleSearchChange} content={searchTerm} />
      {locations
          ? locations.map((location) => {
            return (
              <LocationCard key={location.id} locationName={location.name} locationId={location.id} />
              );
            })
            : "Loading locations..."} 
    </div>
   );
}
 
export default SearchPage;