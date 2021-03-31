import React,{ useEffect, useState } from "react";
import { getLocations } from "./services/APIClient";
import { Location, LocationDetails } from "./types"
import "./App.css";

function App() {
  const [locations, setLocations] = useState<Location[]> ([]);

  function loadLocations(searchTerm: string) {
    getLocations(searchTerm)
      .then((fetchedLocations) => {
        setLocations(fetchedLocations);
      });
  }

  useEffect(() => {
    loadLocations('lon')
  }, []);

  return (
    <div>
      App renders
      {locations
          ? locations.map((location) => {
              return (
                <div>
                  { location.name }
                </div>
              );
            })
          : "Loading locations..."}
    </div>
  );
}

export default App;
