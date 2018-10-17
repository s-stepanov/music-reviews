import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import ArtistSearchField from './components/artistSearchField/ArtistSearchField';
import ArtistsList from './components/artistsList/ArtistsList';

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <ArtistSearchField></ArtistSearchField>
        <ArtistsList></ArtistsList>
      </div>
    );
  }
}

export default App;
