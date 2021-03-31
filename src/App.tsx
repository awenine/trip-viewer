import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";

function App() {

  return (
    <Router>
      <h2>
        Navigation goes here
      </h2>
      <Switch>
        <Route exact path="/"> 
          <SearchPage />
        </Route>
        <Route exact path="/locations/:id" component={DetailsPage}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
