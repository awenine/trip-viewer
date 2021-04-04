/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import DetailsPage from "./components/DetailsPage";
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

function App():EmotionJSX.Element {

  return (
    <Router>
      <div 
        css={css`
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Roboto', sans-serif;
          background: rgb(195,238,216);
          background: linear-gradient(90deg, rgba(195,238,216,1) 0%, rgba(249,219,151,1) 28%, rgba(181,241,254,1) 100%);
        `}>
        <h2>
          <Link 
          to="/" 
          css={css`
            padding: 20px;
            color: #2c9163;
            text-decoration: none;
            &:hover {
              color: #52c792;
            }
          `}>HOME</Link>
        </h2>
        <h1
          css={css`
            padding: 20px;
            color: #1eaef1;
          `}>TRIP VIEWER
        </h1>
        <div></div>
      </div>
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
