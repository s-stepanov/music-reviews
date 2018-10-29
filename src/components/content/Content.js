import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './content.scss';
import ArtistPageContainer from "../../containers/ArtistPageContainer";
import AlbumPageContainer from "../../containers/AlbumPageContainer";
import ArtistsListContainer from "../../containers/ArtistsListContainer";

const Content = props => {
  return (
    <div className={'app-content'}>
      <Switch>
        <Route exact path={'/'} component={ArtistsListContainer}/>
        <Route path={'/artists/:mbid'} component={ArtistPageContainer}/>
        <Route path={'/albums/:mbid'} component={AlbumPageContainer}/>
      </Switch>
      {props.children}
    </div>
  );
};

export default withRouter(Content);