import React,{ useEffect, useState } from "react";
import { getLocations } from "./services/APIClient";
import { Location, LocationDetails } from "./types"
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [locations, setLocations] = useState<Location[]> ([]);
  const [searchTerm, setSearchTerm] = useState("");

  function loadLocations(searchTerm: string) {
    getLocations(searchTerm)
      .then((fetchedLocations) => {
        setLocations(fetchedLocations);
      });
  }

  useEffect(() => {
    loadLocations('lon')
  }, []);

  function handleSearchChange(text: string): void {
    setSearchTerm(text);
  }

  return (
    <div>
      App renders
      <SearchBar handleChange={handleSearchChange} content={searchTerm} />
      {locations
          ? locations.map((location) => {
              return (
                <div key={location.id} >
                  { location.name }
                </div>
              );
            })
          : "Loading locations..."} 
    </div>
  );
}

export default App;
