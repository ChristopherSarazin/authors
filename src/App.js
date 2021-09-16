
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllAuthors from './components/AllAuthors';
import EditAuthor from './components/EditAuthor';
import AddAuthor from './components/AddAuthor'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/api/authors/">
            <AllAuthors  />
          </Route>
          <Route exact path = "/api/authors/new">
            <AddAuthor  />
          </Route>
          <Route exact path = "/api/authors/:id">
            <EditAuthor  />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
