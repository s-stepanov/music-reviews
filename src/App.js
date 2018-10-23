import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import ArtistsListContainer from "./containers/ArtistsListContainer";
import ArtistPageContainer from "./containers/ArtistPageContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AlbumPageContainer from "./containers/AlbumPageContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu/>
          <Switch>
            <Route path={'/artists/:mbid'} component={ArtistPageContainer} />
            <Route path={'/albums/:mbid'} component={AlbumPageContainer}/>
            <Route path={'/'} component={ArtistsListContainer}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
