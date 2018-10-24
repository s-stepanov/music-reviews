import React, { Component } from 'react';
import './App.scss';
import Menu from './components/menu/Menu';
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ContentContainer from "./containers/ContentContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu/>
          <div className={'row no-gutters'}>
            <div className={'col-2'}>
              <Sidebar/>
            </div>
            <div className={'col-10'}>
              <ContentContainer {...this.props}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
