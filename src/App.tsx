import React,{ useEffect, useState } from "react";
import { getLocations } from "./services/APIClient";
import { Location, LocationDetails } from "./types"
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    loadLocations(searchTerm)
  }, [searchTerm]);

  function handleSearchChange(text: string): void {
    setSearchTerm(text);
  }

  return (
    <Router>
      <h2>
        Navigation goes here
      </h2>
      <Switch>
        <Route path="/search">
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
