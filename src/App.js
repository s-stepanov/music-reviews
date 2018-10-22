import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import ArtistSearchField from './components/artistSearchField/ArtistSearchField';
import ArtistsListContainer from "./containers/ArtistsListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <ArtistSearchField></ArtistSearchField>
        <ArtistsListContainer></ArtistsListContainer>
      </div>
    );
  }
}

export default App;
